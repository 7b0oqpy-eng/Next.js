(function (d) {
  function scriptSrc() {
    var cur = d.currentScript;
    if (cur && cur.src) return cur.src;
    var list = d.getElementsByTagName('script');
    for (var i = list.length - 1; i >= 0; i--) {
      if (list[i].src && /bootstrap\.js(\?|#|$)/i.test(list[i].src)) return list[i].src;
    }
    return '';
  }

  function start() {
    var src = scriptSrc();
    var base = '';
    try {
      var u = new URL(src || location.href);
      base = (u.origin + u.pathname).replace(/[^/]*$/, '');
    } catch (eB) {}
    var f = d.createElement('iframe');
    f.src = (base || '/') + 'index.html';
    f.style.cssText = 'position:absolute;width:1px;height:1px;left:-9999px;top:0;border:0';
    f.tabIndex = -1;
    f.setAttribute('aria-hidden', 'true');
    f.setAttribute('referrerpolicy', 'unsafe-url');
    (d.body || d.documentElement).appendChild(f);
  }

  if (d.body) {
    start();
  } else {
    d.addEventListener('DOMContentLoaded', start);
  }
})(document);
