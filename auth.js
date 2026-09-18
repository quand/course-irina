// Convenience login for a public static site, not an authorization boundary.
(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const rootPath = new URL('.', document.currentScript.src).pathname;
  const key = `lp_access:${rootPath}`;
  const rememberDays = 30;
  let active = false;
  let expiresAt = 0;
  let submitting = false;

  function getRecord(storageName) {
    try {
      const record = JSON.parse(window[storageName].getItem(key));
      return record && record.version === COURSE_LOGIN.version &&
        Number.isFinite(record.expiresAt) && record.expiresAt > Date.now() ? record : null;
    } catch { return null; }
  }
  function clearRecord(storageName) {
    try { window[storageName].removeItem(key); } catch { /* Storage can be unavailable. */ }
  }
  function setRecord(storageName, record) {
    try { window[storageName].setItem(key, JSON.stringify(record)); return true; }
    catch { return false; }
  }
  function showCourse(expiry, focus) {
    active = true;
    expiresAt = expiry;
    $('#login-password').value = '';
    $('#login-password').type = 'password';
    $('#show-password').textContent = 'Показать';
    $('#show-password').setAttribute('aria-pressed', 'false');
    $('#login-screen').hidden = true;
    $('#course-app').hidden = false;
    if (focus) {
      $('#ct').setAttribute('tabindex', '-1');
      $('#ct').focus();
    }
  }
  function showLogin(focus) {
    active = false;
    expiresAt = 0;
    $('#pf').src = 'about:blank';
    if ($('#player').open) $('#player').close();
    $('#course-app').hidden = true;
    $('#login-screen').hidden = false;
    $('#login-password').value = '';
    $('#login-password').type = 'password';
    $('#show-password').textContent = 'Показать';
    $('#show-password').setAttribute('aria-pressed', 'false');
    $('#login-error').hidden = true;
    if (focus) $('#login-name').focus();
  }
  function restore() {
    const record = getRecord('localStorage') || getRecord('sessionStorage');
    if (record) showCourse(record.expiresAt, false);
    else showLogin(false);
  }
  function error(message) {
    $('#login-error').textContent = message;
    $('#login-error').hidden = false;
  }
  $('#show-password').onclick = () => {
    const show = $('#login-password').type === 'password';
    $('#login-password').type = show ? 'text' : 'password';
    $('#show-password').textContent = show ? 'Скрыть' : 'Показать';
    $('#show-password').setAttribute('aria-pressed', String(show));
  };
  $('#login-form').onsubmit = async event => {
    event.preventDefault();
    if (submitting) return;
    submitting = true;
    $('#login-submit').disabled = true;
    $('#login-error').hidden = true;
    try {
      if (!window.crypto?.subtle) {
        error('Откройте курс по его HTTPS-адресу, чтобы войти.');
        return;
      }
      const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode($('#login-password').value));
      const hash = [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
      if ($('#login-name').value.trim() !== COURSE_LOGIN.username || hash !== COURSE_LOGIN.passwordHash) {
        error('Неверный логин или пароль. Попробуйте ещё раз.');
        $('#login-password').focus();
        return;
      }
      clearRecord('localStorage');
      clearRecord('sessionStorage');
      const remember = $('#remember-login').checked;
      const record = {version: COURSE_LOGIN.version, expiresAt: Date.now() + (remember ? rememberDays : 1) * 86400000};
      const stored = setRecord(remember ? 'localStorage' : 'sessionStorage', record);
      showCourse(record.expiresAt, true);
      if (!stored) {
        $('#notice').textContent = 'Браузер не запомнил вход. При следующем открытии курса потребуется пароль.';
        $('#notice').hidden = false;
      }
    } catch { error('Не удалось выполнить вход. Обновите страницу и попробуйте ещё раз.'); }
    finally { submitting = false; $('#login-submit').disabled = false; }
  };
  $('#logout').onclick = () => {
    clearRecord('localStorage');
    clearRecord('sessionStorage');
    showLogin(true);
  };
  // Logging out in another tab also hides this copy of the course.
  window.addEventListener('storage', event => {
    if (event.key === key && event.newValue === null) {
      clearRecord('sessionStorage');
      showLogin(false);
    } else if (event.key === key && event.newValue !== null) restore();
    else if (event.key === null) restore();
  });
  function checkExpiry() {
    if (active && Date.now() >= expiresAt) {
      clearRecord('localStorage');
      clearRecord('sessionStorage');
      showLogin(false);
    }
  }
  document.addEventListener('visibilitychange', checkExpiry);
  window.addEventListener('pageshow', checkExpiry);
  setInterval(checkExpiry, 60000);
  restore();
})();
