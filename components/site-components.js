(function () {
  function getNavbarLinks(page) {
    if (page === "index") {
      return {
        ranking: "#promotions",
        news: "news-center.html",
        guide: "casino-guide.html",
        gameGuide: "game-guides.html",
        vip: "#ranking",
      };
    }

    return {
      ranking: "online-casino-recommendation.html",
      news: "news-center.html",
      guide: "casino-guide.html",
      gameGuide: "game-guides.html",
      vip: "index.html#vip",
    };
  }

  function getPromoLinks(page) {
    if (page === "promotions") {
      return {
        newbie: "#cat-newbie",
        deposit: "#cat-deposit",
        vip: "#cat-vip",
        limited: "#cat-limited",
        all: "promotions.html",
      };
    }

    return {
      newbie: "promotions.html#cat-newbie",
      deposit: "promotions.html#cat-deposit",
      vip: "promotions.html#cat-vip",
      limited: "promotions.html#cat-limited",
      all: "promotions.html",
    };
  }

  function getFooterLinks(page) {
    var isIndex = page === "index";
    var promo = getPromoLinks(page);
    return {
      home: "index.html",
      ranking: "online-casino-recommendation.html",
      news: "news-center.html",
      guide: "casino-guide.html",
      gameGuide: "game-guides.html",
      vip: isIndex ? "#vip" : "index.html#vip",
      promoAll: promo.all,
      promoNewbie: promo.newbie,
      promoDeposit: promo.deposit,
      promoVip: promo.vip,
      promoLimited: promo.limited,
      games: "game-guides.html",
      criteria: isIndex ? "#criteria" : "index.html#criteria",
      faq: isIndex ? "#faq" : "index.html#faq",
      helpCenter: "casino-guide.html",
      terms: "disclaimer.html",
      privacy: "privacy-policy.html",
    };
  }

  function isActive(page, key) {
    return page === key ? " active" : "";
  }

  function ensureNavbarStyle() {
    if (document.getElementById("site-navbar-mobile-style")) {
      return;
    }

    var style = document.createElement("style");
    style.id = "site-navbar-mobile-style";
    style.textContent =
      ".hdr{background:rgba(15,17,21,.35);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom-color:rgba(255,255,255,.10);}" +
      ".hdr .hdr-search{background:transparent !important;border:none;box-shadow:none;padding:0;cursor:pointer;}" +
      ".hdr .hdr-search{display:inline-flex;}" +
      ".hdr .hdr-login{display:inline-flex;align-items:center;justify-content:center;height:38px;padding:0 18px;background:#43269A;color:#fff;font-size:15px;font-weight:600;font-family:inherit;line-height:1;border:none;border-radius:0;white-space:nowrap;text-decoration:none;cursor:pointer;transition:background .15s;}" +
      ".hdr .hdr-login:hover{background:#7656D7;}" +
      ".hdr .mob-menu{display:none;}" +
      ".hdr .mob-nav{display:none;}" +
      ".hdr .mob-overlay{display:none;}" +
      "@media (max-width:900px){" +
      "  .hdr .hdr-search{display:none !important;}" +
      "  .hdr .hdr-login{height:36px;padding:0 14px;font-size:14px;}" +
      "  .hdr .pill-nav,.hdr .nav{display:none !important;}" +
      "  .hdr .hdr-in{position:relative;z-index:75;}" +
      "  .hdr.is-menu-open{background:#13161E;border-bottom-color:#2E3444;}" +
      "  .hdr .mob-menu{position:relative;z-index:80;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border:none;background:transparent;color:#F4F7FF;padding:0;cursor:pointer;-webkit-tap-highlight-color:transparent;}" +
      "  .hdr .mob-overlay{display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(8,10,14,.5);opacity:0;pointer-events:none;transition:opacity .25s ease;z-index:60;}" +
      "  .hdr.is-menu-open .mob-overlay{opacity:1;pointer-events:auto;}" +
      "  .hdr .mob-nav{display:flex;flex-direction:column;position:absolute;left:0;right:0;top:100%;background:#13161E;border-top:1px solid #2E3444;box-shadow:0 26px 50px -24px rgba(0,0,0,.75);z-index:70;max-height:0;opacity:0;overflow:hidden;pointer-events:none;transition:max-height .32s cubic-bezier(.4,0,.2,1),opacity .22s ease;}" +
      "  .hdr.is-menu-open .mob-nav{max-height:82vh;opacity:1;pointer-events:auto;overflow-y:auto;-webkit-overflow-scrolling:touch;}" +
      "  .hdr .mob-nav a,.hdr .mob-group-toggle{display:flex;align-items:center;width:100%;padding:15px 22px;font-size:15px;font-weight:500;line-height:1.2;color:#C3CAD8;background:transparent;border:none;border-left:3px solid transparent;border-bottom:1px solid rgba(46,52,68,.55);font-family:inherit;text-align:left;cursor:pointer;transition:color .15s,background .15s,border-color .15s;}" +
      "  .hdr .mob-group-toggle{justify-content:space-between;}" +
      "  .hdr .mob-group-toggle::after{content:'';width:9px;height:9px;flex-shrink:0;border-right:2px solid #8F98AC;border-bottom:2px solid #8F98AC;transform:rotate(45deg);transition:transform .25s ease;margin-top:-3px;}" +
      "  .hdr .mob-group.is-open .mob-group-toggle::after{transform:rotate(-135deg);margin-top:3px;}" +
      "  .hdr .mob-nav a:hover,.hdr .mob-nav a:active,.hdr .mob-group-toggle:hover,.hdr .mob-group-toggle:active{color:#DEF243;border-left-color:#DEF243;background:rgba(222,242,67,.06);}" +
      "  .hdr .mob-nav a.active,.hdr .mob-group-toggle.is-active{color:#DEF243;border-left-color:#DEF243;background:rgba(222,242,67,.06);font-weight:600;}" +
      "  .hdr .mob-submenu{display:none;flex-direction:column;background:rgba(0,0,0,.22);}" +
      "  .hdr .mob-group.is-open .mob-submenu{display:flex;}" +
      "  .hdr .mob-submenu a{padding-left:38px;font-size:14px;color:#A9B1C2;}" +
      "  .hdr .mob-submenu a.active{color:#DEF243;}" +
      "  .hdr .mob-nav>a:last-child{border-bottom:none;}" +
      "}";

    document.head.appendChild(style);
  }

  function bindNavbarInteraction(root) {
    var button = root.querySelector(".mob-menu");
    var header = root.querySelector(".hdr");
    var overlay = root.querySelector(".mob-overlay");
    var groups = root.querySelectorAll(".mob-group");

    if (!button || !header) {
      return;
    }

    function setMenu(open) {
      header.classList.toggle("is-menu-open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
    }

    button.addEventListener("click", function (e) {
      e.stopPropagation();
      setMenu(!header.classList.contains("is-menu-open"));
    });

    if (overlay) {
      overlay.addEventListener("click", function () {
        setMenu(false);
      });
    }

    groups.forEach(function (group) {
      var toggle = group.querySelector(".mob-group-toggle");
      if (toggle) {
        toggle.addEventListener("click", function () {
          var isOpen = group.classList.toggle("is-open");
          toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
      }
    });

    root.querySelectorAll(".mob-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    // 點擊選單以外的任何地方就關閉
    document.addEventListener("click", function (e) {
      if (!header.classList.contains("is-menu-open")) {
        return;
      }
      if (header.contains(e.target)) {
        return;
      }
      setMenu(false);
    });

    // 按下 Esc 關閉
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" || e.keyCode === 27) {
        setMenu(false);
      }
    });

    // 視窗放大回桌機尺寸時自動收起
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        setMenu(false);
      }
    });
  }

  class SiteNavbar extends HTMLElement {
    connectedCallback() {
      var page = this.getAttribute("page") || "index";
      var links = getNavbarLinks(page);
      var promo = getPromoLinks(page);
      var isHotGames = page === "slot-recommend" || page === "live-casino" || page === "sportsbook" || page === "table-games" || page === "original-games";
      var headerContainerClass = "shell hdr-in";

      ensureNavbarStyle();

      this.innerHTML =
        '<header class="hdr">' +
        '  <div class="' + headerContainerClass + '">' +
        '    <a class="brand" href="index.html">晴天娛樂城推薦網</a>' +
        '    <nav class="pill-nav nav">' +
        '      <a href="' + links.ranking + '" class="' + isActive(page, "online").trim() + '">線上娛樂城排行榜</a>' +
        '      <a href="' + links.news + '" class="' + isActive(page, "news").trim() + '">娛樂城新聞</a>' +
        '      <a href="' + links.guide + '" class="' + isActive(page, "guide").trim() + '">娛樂城攻略</a>' +
        '      <a href="' + links.gameGuide + '" class="' + isActive(page, "game-guide").trim() + '">遊戲指南</a>' +
        '      <div class="nav-dd">' +
        '        <a href="slot-recommend.html" class="nav-dd-trigger' + (isHotGames ? " active" : "") + '">熱門遊戲<svg class="nav-dd-caret" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
        '        <div class="nav-dd-menu">' +
        '          <a href="slot-recommend.html">老虎機推薦</a>' +
        '          <a href="live-casino-recommend.html">真人娛樂推薦</a>' +
        '          <a href="table-games-recommend.html">桌上遊戲推薦</a>' +
        '          <a href="sportsbook-recommend.html">體育投注</a>' +
        '          <a href="original-games-recommend.html">原創娛樂城遊戲</a>' +
        '        </div>' +
        '      </div>' +
        '      <div class="nav-dd">' +
        '        <a href="promotions.html" class="nav-dd-trigger' + isActive(page, "promotions") + '">優惠活動<svg class="nav-dd-caret" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
        '        <div class="nav-dd-menu">' +
        '          <a href="' + promo.all + '" class="nav-dd-all">優惠總覽</a>' +
        '          <a href="' + promo.newbie + '">新手優惠</a>' +
        '          <a href="' + promo.deposit + '">儲值回饋</a>' +
        '          <a href="' + promo.vip + '">VIP獎勵</a>' +
        '          <a href="' + promo.limited + '">限時活動</a>' +
        '        </div>' +
        '      </div>' +
        '      <a href="' + links.vip + '">VIP會員</a>' +
        '    </nav>' +
        '    <div class="hdr-icons">' +
        '      <button class="hdr-ic hdr-search" aria-label="搜尋"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M20 20L16.8 16.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>' +
        '      <a class="hdr-login" href="#">會員登入</a>' +
        '      <button class="mob-menu hdr-ic" aria-label="開啟選單" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>' +
        '    </div>' +
        '  </div>' +
        '  <nav class="mob-nav" aria-label="手機導覽">' +
        '    <a href="' + links.ranking + '" class="' + isActive(page, "online").trim() + '">線上娛樂城排行榜</a>' +
        '    <a href="' + links.news + '" class="' + isActive(page, "news").trim() + '">娛樂城新聞</a>' +
        '    <a href="' + links.guide + '" class="' + isActive(page, "guide").trim() + '">娛樂城攻略</a>' +
        '    <a href="' + links.gameGuide + '" class="' + isActive(page, "game-guide").trim() + '">遊戲指南</a>' +
        '    <div class="mob-group' + (isHotGames ? ' is-open' : '') + '">' +
        '      <button class="mob-group-toggle' + (isHotGames ? ' is-active' : '') + '" type="button" aria-expanded="' + (isHotGames ? 'true' : 'false') + '">熱門遊戲</button>' +
        '      <div class="mob-submenu">' +
        '        <a href="slot-recommend.html" class="' + isActive(page, "slot-recommend").trim() + '">老虎機推薦</a>' +
        '        <a href="live-casino-recommend.html" class="' + isActive(page, "live-casino").trim() + '">真人娛樂推薦</a>' +
        '        <a href="table-games-recommend.html" class="' + isActive(page, "table-games").trim() + '">桌上遊戲推薦</a>' +
        '        <a href="sportsbook-recommend.html" class="' + isActive(page, "sportsbook").trim() + '">體育投注</a>' +
        '        <a href="original-games-recommend.html" class="' + isActive(page, "original-games").trim() + '">原創娛樂城遊戲</a>' +
        '      </div>' +
        '    </div>' +
        '    <div class="mob-group' + (page === "promotions" ? ' is-open' : '') + '">' +
        '      <button class="mob-group-toggle' + (page === "promotions" ? ' is-active' : '') + '" type="button" aria-expanded="' + (page === "promotions" ? 'true' : 'false') + '">優惠活動</button>' +
        '      <div class="mob-submenu">' +
        '        <a href="' + promo.all + '" class="' + isActive(page, "promotions").trim() + '">優惠總覽</a>' +
        '        <a href="' + promo.newbie + '">新手優惠</a>' +
        '        <a href="' + promo.deposit + '">儲值回饋</a>' +
        '        <a href="' + promo.vip + '">VIP獎勵</a>' +
        '        <a href="' + promo.limited + '">限時活動</a>' +
        '      </div>' +
        '    </div>' +
        '    <a href="' + links.vip + '">VIP會員</a>' +
        '  </nav>' +
        '  <div class="mob-overlay" aria-hidden="true"></div>' +
        '</header>';

      bindNavbarInteraction(this);
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      var page = this.getAttribute("page") || "index";
      var links = getFooterLinks(page);

      this.innerHTML =
        '<footer class="ft"><div class="shell ft-inner">' +
        '  <div class="ft-brand"><h2>晴天娛樂城推薦網</h2><p>提供最透明的娛樂城資訊與安全性評測，為每一位玩家打造屬於自身的完整評測體驗</p></div>' +
        '  <div class="ft-links">' +
        '    <div class="ft-col"><h3>優惠活動</h3><ul><li><a href="' + links.promoAll + '">優惠總覽</a></li><li><a href="' + links.promoNewbie + '">新手優惠</a></li><li><a href="' + links.promoDeposit + '">儲值優惠</a></li><li><a href="' + links.promoVip + '">VIP活動</a></li><li><a href="' + links.promoLimited + '">限時活動</a></li></ul></div>' +
        '    <div class="ft-col"><h3>遊戲分類</h3><ul><li><a href="slot-recommend.html">老虎機</a></li><li><a href="live-casino-recommend.html">真人娛樂</a></li><li><a href="sportsbook-recommend.html">體育投注</a></li><li><a href="table-games-recommend.html">桌上遊戲</a></li><li><span style="color:var(--n300);font-size:14px">原創遊戲</span></li></ul></div>' +
        '    <div class="ft-col"><h3>品牌與公司</h3><ul><li><a href="' + links.criteria + '">品牌介紹</a></li><li><a href="' + links.criteria + '">技術與安全</a></li></ul></div>' +
        '    <div class="ft-col"><h3>客服與支援</h3><ul><li><a href="' + links.faq + '">聯繫客服</a></li><li><a href="' + links.faq + '">常見問題</a></li><li><a href="' + links.helpCenter + '">幫助中心</a></li></ul></div>' +
        '    <div class="ft-col"><h3>法務與政策</h3><ul><li><a href="' + links.terms + '">免責聲明</a></li><li><a href="' + links.privacy + '">隱私權政策</a></li></ul></div>' +
        '  </div>' +
        '  <div class="ft-bot">© 2026 晴天娛樂城推薦網. All rights reserved.</div>' +
        '</div></footer>';
    }
  }

  class SiteFaq extends HTMLElement {
    connectedCallback() {
      var title = this.getAttribute("title") || "FAQ常見問題";
      var sectionClass = this.getAttribute("section-class") || "sec-pad";
      var shellStyle = this.getAttribute("shell-style");
      var headClass = this.getAttribute("head-class") || "sec-head";
      var titleClass = this.getAttribute("title-class") || "";
      var content = this.innerHTML;
      var shellStyleAttr = shellStyle ? ' style="' + shellStyle + '"' : "";
      var titleHtml = '<h2' + (titleClass ? ' class="' + titleClass + '"' : "") + '>' + title + '</h2>';
      var headHtml = headClass
        ? '<div class="' + headClass + '"><div>' + titleHtml + '</div></div>'
        : titleHtml;

      this.innerHTML =
        '<section class="' + sectionClass + '" id="faq">' +
        '  <div class="shell"' + shellStyleAttr + '>' +
        '    ' + headHtml +
        '    <div class="faq-list">' + content + '</div>' +
        '  </div>' +
        '</section>';
    }
  }

  customElements.define("site-navbar", SiteNavbar);
  customElements.define("site-footer", SiteFooter);
  customElements.define("site-faq", SiteFaq);
})();
