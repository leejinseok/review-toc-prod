$(document).ready(function () {
    handleTopBanners(); // top banner
    handleTopBannerClose(); // top banner close event
    handleRollingBanner(); // handle rolling banner event
    handleRollingBannerLeft(); // handle rolling banner left css
    handleBodyClick(); // handle body click event
    handleCPAListSubMenuLeftRight(); // handle cpa-list submenu
    handleExperienceGroupListSubMenuLeftRight(); // handle experience group submenu
    handleCardHoverPriceColor();
    handleCardHoverBottom(); 
    handleSwiperAsideBottom();
});

function handleSwiperAsideBottom () {
  var swiper = new Swiper('aside .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

/**
 * cpa list card hover
 * @return {void}
 */
function handleCardHoverPriceColor () {
  var cpaList = $('.cpa-list .wrapper-article article');
  var img = $('.cpa-list .wrapper-article article .header a img');

  cpaList.hover(function () {
    var index = cpaList.index(this);
    var curItem = cpaList.eq(index);

    curItem.find('.price').addClass('active');
    img.eq(index).addClass('active');
  });

  cpaList.mouseleave(function () {
    var index = cpaList.index(this);
    var curItem = cpaList.eq(index);

    curItem.find('.price').removeClass('active');
    img.eq(index).removeClass('active');
  });

  // img.hover(function () {
  //   var index = img.index(this);
  //   var curItem = cpaList.eq(index);
  //   curItem.find('.price').addClass('active');
  // });

  // img.mouseleave(function () {
  //   cpaList.find('.price').removeClass('active');
  // });
}

/**
 * 체험단 리스트 card hover
 * @return {void}
 */
function handleCardHoverBottom () {
  var list = $('.experienceGroup-list .wrapper-article article');
  var img = $('.experienceGroup-list .wrapper-article article .header img');

  list.hover(function () {
    var index = list.index(this);
    var curItem = list.eq(index);
    curItem.find('.bottom').addClass('active');
    img.eq(index).addClass('active');
  });

  list.mouseleave(function () {
    var index = list.index(this);
    var curItem = list.eq(index);
    curItem.find('.bottom').removeClass('active');
    img.eq(index).removeClass('active');
  });

  // img.hover(function () {
  //   var index = img.index(this);
  //   var curItem = list.eq(index);
  //   curItem.find('.bottom').addClass('active');
  // });

  // img.mouseleave(function () {
  //   list.find('.bottom').removeClass('active');
  // });
}

/**
 * top banner
 * @return {void}
 */
function handleTopBanners () {
  var swiper = new Swiper('.top-banners.swiper-container,  .middle-banner.swiper-container', {
     direction: 'vertical',
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     loop: true,
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
   });
}

/**
 * 체험단 리스트 서브메뉴
 * @return {void}
 */
function handleExperienceGroupListSubMenuLeftRight () {
    var arrow = $('.experienceGroup-list .arrows ul li a');
    var item = $('.experienceGroup-list .wrapper-sub-menu .menus li a');

    var rollingSubMenu = new RollingSubMenu();
    rollingSubMenu.setWrapperDiv('.experienceGroup-list .wrapper-sub-menu .menus');
    rollingSubMenu.setWrapperItems('.experienceGroup-list .wrapper-sub-menu .menus .wrapper-items');
    rollingSubMenu.setUl('.experienceGroup-list .wrapper-sub-menu .menus .wrapper-items ul');
    rollingSubMenu.setLists('.experienceGroup-list .wrapper-sub-menu .menus .wrapper-items li');
    rollingSubMenu.setMax(1);
    rollingSubMenu.setActiveMaxIdx();
    arrow.click(function (e) {
        e.preventDefault();
        var direction = $(this).data('direction');
        rollingSubMenu.setDirection(direction);
        rollingSubMenu.move();
    });

    item.click(function (e) {
        e.preventDefault();
        var idx = item.index(this);
        rollingSubMenu.moveByClickNavigation(idx);
    });
}

/**
 * CPA 리스트 서브메뉴
 * @return {void}
 */
function handleCPAListSubMenuLeftRight () {
    var arrow = $('.cpa-list .arrows ul li a');
    var item = $('.cpa-list .wrapper-sub-menu .menus li a');

    var rollingSubMenu = new RollingSubMenu();
    rollingSubMenu.setWrapperDiv('.cpa-list .wrapper-sub-menu .menus');
    rollingSubMenu.setWrapperItems('.cpa-list .wrapper-sub-menu .menus .wrapper-items');
    rollingSubMenu.setUl('.cpa-list .wrapper-sub-menu .menus .wrapper-items ul');
    rollingSubMenu.setLists('.cpa-list .wrapper-sub-menu .menus .wrapper-items li');
    rollingSubMenu.setMax(1);
    rollingSubMenu.setActiveMaxIdx();
    arrow.click(function (e) {
        e.preventDefault();
        var direction = $(this).data('direction');
        rollingSubMenu.setDirection(direction);
        rollingSubMenu.move();
    });

    item.click(function (e) {
        e.preventDefault();
        var idx = item.index(this);
        rollingSubMenu.moveByClickNavigation(idx);
    });
}

/**
 * rolling submenu object
 * @constructor
 */
function RollingSubMenu () {
    this.wrapperDiv;
    this.wrapperItems;
    this.ul;
    this.lists;
    this.activeIdx = 0;
    this.activeMaxIdx;
    this.idx = 0;
    this.left = 0;
    this.x = 0;
    this.max = 0;
    this.direction;

    this.setMax = function (max) {
        this.max = max;
    }

    this.setActiveMaxIdx = function () {
        this.activeMaxIdx = this.lists.length;
    }

    this.setWrapperDiv = function (selector) {
        this.wrapperDiv = $(selector);
    }

    this.setWrapperItems = function (selector) {
        this.wrapperItems = $(selector);
    };

    this.setUl = function (selector) {
        this.ul = $(selector);
    }

    this.setLists = function (selector) {
        this.lists = $(selector);
    }

    this.setDirection = function (direction) {
        this.direction = direction;
    }

    /**
     * navigation click 할때 move
     * @param  {Number} index
     * @return {void}
     */
    this.moveByClickNavigation = function (index) {
        this.lists.removeClass('active');
        this.lists.eq(index).addClass('active');
        this.activeIdx = index;
    };

    this.move = function () {
        this.setActiveClass();

        if (this.ul.width() < this.wrapperDiv.width()) {
            return;
        }

        if (this.direction === 'right') {
            if (this.max === this.idx) {
                return;
            }
            this.x -= this.lists.eq(this.idx).outerWidth();
            this.idx++;
        } else {
            if (this.idx === 0) {
                return;
            }
            this.idx--;
            this.x += this.lists.eq(this.idx).outerWidth();
        }

        var transform = 'translateX(' + this.x + 'px)';
        this.wrapperItems.css('transform', transform);
    }

    this.setActiveClass = function () {
        if (this.direction === 'right') {
            if (this.activeIdx === (this.activeMaxIdx - 1)) {
                return;
            }
            this.activeIdx++;
        } else {
            if (this.activeIdx === 0) {
                return;
            }
            this.activeIdx--;
        }

        this.lists.removeClass('active');
        this.lists.eq(this.activeIdx).addClass('active');
    }
}

/**
 * wrapper banner item left on window resize, init
 * @return {void}
 */
function handleRollingBannerLeft () {
    var winWidth = $(window).width();
    getWrapperBannerItemLeft(winWidth);
    $(window).resize(function () {
        winWidth = $(window).width();
        getWrapperBannerItemLeft(winWidth);
    });
}

/**
 * set wrapper banner item left
 * @param  {Number} winWidth
 * @return {void}
 */
function getWrapperBannerItemLeft (winWidth) {
    var wrapperBannerItem = $('.wrapper-banner-item');
    if (winWidth > 1440) {
        var imgWidth = 480;
        var left = 480 - ((winWidth - (imgWidth * 3)) / 2);
        wrapperBannerItem.css('left', '-' + left + 'px');
    } else {
        wrapperBannerItem.css('left', '0px');
    }
}

/**
 * handle rolling banner event
 * @return {void}
 */
function handleRollingBanner () {
    var rollingBanner = new RollingBanner();
    rollingBanner.setWrapperBanner('.wrapper-banner');
    rollingBanner.setWrapperBannerItem('.wrapper-banner-item');
    rollingBanner.setBannerItems('.banner-item');
    rollingBanner.setDots('.navigation .dot');
    rollingBanner.setItemWidth();
    rollingBanner.setDirection('right');
    rollingBanner.startInterval();

    $('.rolling-banner').find('.arrow').click(function () {
        rollingBanner.pauseInterval();
        var direction = $(this).hasClass('arrow-right') ? 'right' : 'left';
        if (direction === 'right') {
            rollingBanner.moveRight();
        } else {
            rollingBanner.moveLeft();
        }
    });

    $('.rolling-banner').find('.dot').click(function () {
        var index = $('.rolling-banner .dot').index(this);
        rollingBanner.moveByClickNavigation(index);
    });
};

/**
 * rolling banner object
 * @constructor
 */
function RollingBanner () {
    this.idx = 0;
    this.page = 0;
    this.direction;
    this.direct = false;
    this.x = 0;
    this.wrapperBanner;
    this.wrapperBannerItem;
    this.bannerItems;
    this.itemWidth;
    this.arrow;
    this.dots;
    this.interval;

    /**
     * set wrapper banner elements
     * @param  {String} selector
     * @return {void}
     */
    this.setWrapperBanner = function (selector) {
        this.wrapperBanner = $(selector);
    };

    /**
     * ser wrapper banner item
     * @param  {String} selector
     * @return {void}
     */
    this.setWrapperBannerItem = function (selector) {
        this.wrapperBannerItem = $(selector);
    };

    /**
     * set banner items
     * @param  {String} selector
     * @return {void}
     */
    this.setBannerItems = function (selector) {
        this.bannerItems = $(selector);
    };

    /**
     * set banner item width
     * @return {[type]} [description]
     */
    this.setItemWidth = function () {
        this.itemWidth = this.bannerItems.width() + 20;
    }

    /**
     * set arrow img element
     * @param  {DOM} el
     * @return {void}
     */
    this.setArrow = function (el) {
        this.arrow = el;
    };

    /**
     * set direction
     * @param  {String} direction right | left
     * @return {void}
     */
    this.setDirection = function (direction) {
        this.direction = direction;
    };

    /**
     * set navigation dot
     * @param  {String} className
     * @return {void}
     */
    this.setDots = function (selector) {
        this.dots = $(selector);
        this.dots.eq(0).addClass('active');
    }

    /**
     * start slide interval
     * @return {void}
     */
    this.startInterval = function () {
        var ctx = this;
        this.interval = setInterval(function () {
            if (ctx.direction === 'right') {
                ctx.moveRight();
            } else if (ctx.direction === 'left') {
                ctx.moveLeft();
            }
        }, 5000);
    };

    /**
     * stop slide interval
     * @return {void}
     */
    this.pauseInterval = function () {
        clearInterval(this.interval);
    };

    /**
     * slide move
     * @return {void}
     */
    this.move = function () {
        this.dots.removeClass('active');
        if (this.idx === 5) {
            this.dots.eq(0).addClass('active');
        } else {
            this.dots.eq(this.idx).addClass('active');
        }

        var transform = 'translateX(' + this.x + 'px)';
        var ctx = this;
        setTimeout(function () {
            ctx.wrapperBannerItem
                .addClass('transition')
                .css('transform', transform)
        }, 100);
    }

    /**
     * navigation click 할때 move
     * @param  {Number} index
     * @return {void}
     */
    this.moveByClickNavigation = function (index) {
        var diff = index - this.idx;
        if (diff > 0) {
            for (var i = 0; i < diff; i++) {
                this.moveRight();
            }
        } else {
            for (var i = 0; i < Math.abs(diff); i++) {
                this.moveLeft();
            }
        }
    };

    /**
     * move left (before move)
     * @return {void}
     */
    this.moveLeft = function () {
        this.wrapperBannerItem.removeClass('transition');
        this.isIndexAddElements();

        if (this.idx === 0) {
            this.idx = 5;
            this.x = -2400;
            this.wrapperBannerItem.css('transform', 'translateX(' + this.x + 'px)');
            this.direct = true;
        }
        this.x += this.itemWidth;
        this.idx--;
        this.move();
    };

    /**
     * move right (before move)
     * @return {void}
     */
    this.moveRight = function () {
        this.wrapperBannerItem.removeClass('transition');
        this.isIndexAddElements();

        if (this.idx === 5) {
            this.idx = 0;
            this.x = 0;
            this.wrapperBannerItem.css('transform', 'translateX(' + this.x + 'px)');
            this.direct = true;
        }
        this.x -= this.itemWidth;
        this.idx++;
        this.move();
    };

    /**
     * slide elements add (for infinite scroll)
     * @return {void}
     */
    this.addElements = function () {
        var appendElements = "";
        this.bannerItems.each(function (index, item) {
           appendElements += '<div class="banner-item item-0' + (index + 1) + '">';
           appendElements += item.innerHTML;
           appendElements += '</div>';
        });

        if (this.direction === 'right') {
            this.wrapperBannerItem.prepend(appendElements);
        } else {
            this.wrapperBannerItem.prepend(appendElements);
        }

       this.page++;
    }

    /**
     * banner item element를 추가해야 하는지 확인
     * @return {void}
     */
    this.isIndexAddElements = function () {
        var addItemOnce = Math.abs(this.idx) % 5 === 0 ? true : false;
        if (addItemOnce && !this.page) {
            this.addElements();
        }
    }
}


/**
 * top banner close event
 * @return {void}
 */
function handleTopBannerClose () {
    var banner = $('.top-banner');
    var closeBtn = $('.top-banner .close');
    closeBtn.click(function () {
        banner.remove();
    });
}
