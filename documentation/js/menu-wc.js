'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-blog-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-71d946e1c5178d447f796ca1ba453f9a8729a2397576d64f30bfd72fd9912c72045b2cc7bb7abca0f448a88914e4b9b91185bfcaf7246148260d12d70f97b511"' : 'data-bs-target="#xs-controllers-links-module-AppModule-71d946e1c5178d447f796ca1ba453f9a8729a2397576d64f30bfd72fd9912c72045b2cc7bb7abca0f448a88914e4b9b91185bfcaf7246148260d12d70f97b511"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-71d946e1c5178d447f796ca1ba453f9a8729a2397576d64f30bfd72fd9912c72045b2cc7bb7abca0f448a88914e4b9b91185bfcaf7246148260d12d70f97b511"' :
                                            'id="xs-controllers-links-module-AppModule-71d946e1c5178d447f796ca1ba453f9a8729a2397576d64f30bfd72fd9912c72045b2cc7bb7abca0f448a88914e4b9b91185bfcaf7246148260d12d70f97b511"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-71d946e1c5178d447f796ca1ba453f9a8729a2397576d64f30bfd72fd9912c72045b2cc7bb7abca0f448a88914e4b9b91185bfcaf7246148260d12d70f97b511"' : 'data-bs-target="#xs-injectables-links-module-AppModule-71d946e1c5178d447f796ca1ba453f9a8729a2397576d64f30bfd72fd9912c72045b2cc7bb7abca0f448a88914e4b9b91185bfcaf7246148260d12d70f97b511"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-71d946e1c5178d447f796ca1ba453f9a8729a2397576d64f30bfd72fd9912c72045b2cc7bb7abca0f448a88914e4b9b91185bfcaf7246148260d12d70f97b511"' :
                                        'id="xs-injectables-links-module-AppModule-71d946e1c5178d447f796ca1ba453f9a8729a2397576d64f30bfd72fd9912c72045b2cc7bb7abca0f448a88914e4b9b91185bfcaf7246148260d12d70f97b511"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-e3edf07a5d3500da4db36d3bfb1709cddbd8bbc78b7177c3eb5d40546b9f11c09e6b5513787cf3579933724ce27f030e6c98e4e5a422411c1eb22cd75360dd25"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e3edf07a5d3500da4db36d3bfb1709cddbd8bbc78b7177c3eb5d40546b9f11c09e6b5513787cf3579933724ce27f030e6c98e4e5a422411c1eb22cd75360dd25"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e3edf07a5d3500da4db36d3bfb1709cddbd8bbc78b7177c3eb5d40546b9f11c09e6b5513787cf3579933724ce27f030e6c98e4e5a422411c1eb22cd75360dd25"' :
                                            'id="xs-controllers-links-module-AuthModule-e3edf07a5d3500da4db36d3bfb1709cddbd8bbc78b7177c3eb5d40546b9f11c09e6b5513787cf3579933724ce27f030e6c98e4e5a422411c1eb22cd75360dd25"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-e3edf07a5d3500da4db36d3bfb1709cddbd8bbc78b7177c3eb5d40546b9f11c09e6b5513787cf3579933724ce27f030e6c98e4e5a422411c1eb22cd75360dd25"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e3edf07a5d3500da4db36d3bfb1709cddbd8bbc78b7177c3eb5d40546b9f11c09e6b5513787cf3579933724ce27f030e6c98e4e5a422411c1eb22cd75360dd25"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e3edf07a5d3500da4db36d3bfb1709cddbd8bbc78b7177c3eb5d40546b9f11c09e6b5513787cf3579933724ce27f030e6c98e4e5a422411c1eb22cd75360dd25"' :
                                        'id="xs-injectables-links-module-AuthModule-e3edf07a5d3500da4db36d3bfb1709cddbd8bbc78b7177c3eb5d40546b9f11c09e6b5513787cf3579933724ce27f030e6c98e4e5a422411c1eb22cd75360dd25"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TokensProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-80caf11aaa605a058ecd506c8dd460ee99bff868863e1ba5c3929a02e3f17b6655c5153e330c7671b4dfd65cfe1724b76176cbcffdf4814a176fc3547dd67e54"' : 'data-bs-target="#xs-injectables-links-module-MailModule-80caf11aaa605a058ecd506c8dd460ee99bff868863e1ba5c3929a02e3f17b6655c5153e330c7671b4dfd65cfe1724b76176cbcffdf4814a176fc3547dd67e54"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-80caf11aaa605a058ecd506c8dd460ee99bff868863e1ba5c3929a02e3f17b6655c5153e330c7671b4dfd65cfe1724b76176cbcffdf4814a176fc3547dd67e54"' :
                                        'id="xs-injectables-links-module-MailModule-80caf11aaa605a058ecd506c8dd460ee99bff868863e1ba5c3929a02e3f17b6655c5153e330c7671b4dfd65cfe1724b76176cbcffdf4814a176fc3547dd67e54"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-950591c21432550a83fb970dbddea87205984fcde19d68867e735344f7b9ad9a38420e37d769c6ad53ebbde3539b0b75bf59dad8e23fbc78448e0aef22915224"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-950591c21432550a83fb970dbddea87205984fcde19d68867e735344f7b9ad9a38420e37d769c6ad53ebbde3539b0b75bf59dad8e23fbc78448e0aef22915224"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-950591c21432550a83fb970dbddea87205984fcde19d68867e735344f7b9ad9a38420e37d769c6ad53ebbde3539b0b75bf59dad8e23fbc78448e0aef22915224"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-950591c21432550a83fb970dbddea87205984fcde19d68867e735344f7b9ad9a38420e37d769c6ad53ebbde3539b0b75bf59dad8e23fbc78448e0aef22915224"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-950591c21432550a83fb970dbddea87205984fcde19d68867e735344f7b9ad9a38420e37d769c6ad53ebbde3539b0b75bf59dad8e23fbc78448e0aef22915224"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-950591c21432550a83fb970dbddea87205984fcde19d68867e735344f7b9ad9a38420e37d769c6ad53ebbde3539b0b75bf59dad8e23fbc78448e0aef22915224"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-950591c21432550a83fb970dbddea87205984fcde19d68867e735344f7b9ad9a38420e37d769c6ad53ebbde3539b0b75bf59dad8e23fbc78448e0aef22915224"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-950591c21432550a83fb970dbddea87205984fcde19d68867e735344f7b9ad9a38420e37d769c6ad53ebbde3539b0b75bf59dad8e23fbc78448e0aef22915224"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-32d78a5e749705858496cf040da26598de0d24af350d2581d872ac577a2871c7a3033313796fa1b91f3fe5fac01f091de4d62253413b1465c2f30f2836889efe"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-32d78a5e749705858496cf040da26598de0d24af350d2581d872ac577a2871c7a3033313796fa1b91f3fe5fac01f091de4d62253413b1465c2f30f2836889efe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-32d78a5e749705858496cf040da26598de0d24af350d2581d872ac577a2871c7a3033313796fa1b91f3fe5fac01f091de4d62253413b1465c2f30f2836889efe"' :
                                        'id="xs-injectables-links-module-PaginationModule-32d78a5e749705858496cf040da26598de0d24af350d2581d872ac577a2871c7a3033313796fa1b91f3fe5fac01f091de4d62253413b1465c2f30f2836889efe"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-df0806cf553f171c261b0cd0e5b55664f846d34951ee41fff0a28fffcd548447d1bf9defe9ec3b4f2b3b62e33488e46959adb928c1e117d23d8e155098d0aa8b"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-df0806cf553f171c261b0cd0e5b55664f846d34951ee41fff0a28fffcd548447d1bf9defe9ec3b4f2b3b62e33488e46959adb928c1e117d23d8e155098d0aa8b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-df0806cf553f171c261b0cd0e5b55664f846d34951ee41fff0a28fffcd548447d1bf9defe9ec3b4f2b3b62e33488e46959adb928c1e117d23d8e155098d0aa8b"' :
                                            'id="xs-controllers-links-module-PostsModule-df0806cf553f171c261b0cd0e5b55664f846d34951ee41fff0a28fffcd548447d1bf9defe9ec3b4f2b3b62e33488e46959adb928c1e117d23d8e155098d0aa8b"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-df0806cf553f171c261b0cd0e5b55664f846d34951ee41fff0a28fffcd548447d1bf9defe9ec3b4f2b3b62e33488e46959adb928c1e117d23d8e155098d0aa8b"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-df0806cf553f171c261b0cd0e5b55664f846d34951ee41fff0a28fffcd548447d1bf9defe9ec3b4f2b3b62e33488e46959adb928c1e117d23d8e155098d0aa8b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-df0806cf553f171c261b0cd0e5b55664f846d34951ee41fff0a28fffcd548447d1bf9defe9ec3b4f2b3b62e33488e46959adb928c1e117d23d8e155098d0aa8b"' :
                                        'id="xs-injectables-links-module-PostsModule-df0806cf553f171c261b0cd0e5b55664f846d34951ee41fff0a28fffcd548447d1bf9defe9ec3b4f2b3b62e33488e46959adb928c1e117d23d8e155098d0aa8b"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-f02e465e3febd8e6f97ecebbca55d5c66c980d54e5d2e3b3b456ef1d4cdfcb6ff2f6a363453d1a4552e2a33cd7cc8e53f3ecf627e03515102c1a9f9475b6a471"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-f02e465e3febd8e6f97ecebbca55d5c66c980d54e5d2e3b3b456ef1d4cdfcb6ff2f6a363453d1a4552e2a33cd7cc8e53f3ecf627e03515102c1a9f9475b6a471"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-f02e465e3febd8e6f97ecebbca55d5c66c980d54e5d2e3b3b456ef1d4cdfcb6ff2f6a363453d1a4552e2a33cd7cc8e53f3ecf627e03515102c1a9f9475b6a471"' :
                                            'id="xs-controllers-links-module-TagsModule-f02e465e3febd8e6f97ecebbca55d5c66c980d54e5d2e3b3b456ef1d4cdfcb6ff2f6a363453d1a4552e2a33cd7cc8e53f3ecf627e03515102c1a9f9475b6a471"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-f02e465e3febd8e6f97ecebbca55d5c66c980d54e5d2e3b3b456ef1d4cdfcb6ff2f6a363453d1a4552e2a33cd7cc8e53f3ecf627e03515102c1a9f9475b6a471"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-f02e465e3febd8e6f97ecebbca55d5c66c980d54e5d2e3b3b456ef1d4cdfcb6ff2f6a363453d1a4552e2a33cd7cc8e53f3ecf627e03515102c1a9f9475b6a471"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-f02e465e3febd8e6f97ecebbca55d5c66c980d54e5d2e3b3b456ef1d4cdfcb6ff2f6a363453d1a4552e2a33cd7cc8e53f3ecf627e03515102c1a9f9475b6a471"' :
                                        'id="xs-injectables-links-module-TagsModule-f02e465e3febd8e6f97ecebbca55d5c66c980d54e5d2e3b3b456ef1d4cdfcb6ff2f6a363453d1a4552e2a33cd7cc8e53f3ecf627e03515102c1a9f9475b6a471"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadsModule.html" data-type="entity-link" >UploadsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' : 'data-bs-target="#xs-controllers-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' :
                                            'id="xs-controllers-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' }>
                                            <li class="link">
                                                <a href="controllers/UploadsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' : 'data-bs-target="#xs-injectables-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' :
                                        'id="xs-injectables-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' }>
                                        <li class="link">
                                            <a href="injectables/UploadToAwsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadToAwsProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UploadsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-dfbd2d744b3d6c0c07bfc44087a9d438bfe4b1786f9d50e98af8578729aa49e61a7193b9ab1df76b5f53351f90fdf8d0b217c9ef9183d0b7a5bb351ef6b0325b"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-dfbd2d744b3d6c0c07bfc44087a9d438bfe4b1786f9d50e98af8578729aa49e61a7193b9ab1df76b5f53351f90fdf8d0b217c9ef9183d0b7a5bb351ef6b0325b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-dfbd2d744b3d6c0c07bfc44087a9d438bfe4b1786f9d50e98af8578729aa49e61a7193b9ab1df76b5f53351f90fdf8d0b217c9ef9183d0b7a5bb351ef6b0325b"' :
                                            'id="xs-controllers-links-module-UsersModule-dfbd2d744b3d6c0c07bfc44087a9d438bfe4b1786f9d50e98af8578729aa49e61a7193b9ab1df76b5f53351f90fdf8d0b217c9ef9183d0b7a5bb351ef6b0325b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-dfbd2d744b3d6c0c07bfc44087a9d438bfe4b1786f9d50e98af8578729aa49e61a7193b9ab1df76b5f53351f90fdf8d0b217c9ef9183d0b7a5bb351ef6b0325b"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-dfbd2d744b3d6c0c07bfc44087a9d438bfe4b1786f9d50e98af8578729aa49e61a7193b9ab1df76b5f53351f90fdf8d0b217c9ef9183d0b7a5bb351ef6b0325b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-dfbd2d744b3d6c0c07bfc44087a9d438bfe4b1786f9d50e98af8578729aa49e61a7193b9ab1df76b5f53351f90fdf8d0b217c9ef9183d0b7a5bb351ef6b0325b"' :
                                        'id="xs-injectables-links-module-UsersModule-dfbd2d744b3d6c0c07bfc44087a9d438bfe4b1786f9d50e98af8578729aa49e61a7193b9ab1df76b5f53351f90fdf8d0b217c9ef9183d0b7a5bb351ef6b0325b"' }>
                                        <li class="link">
                                            <a href="injectables/CreateUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersCreateManyProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersCreateManyProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" >GoogleAuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UploadsController.html" data-type="entity-link" >UploadsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Upload.html" data-type="entity-link" >Upload</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateManyUsersDto.html" data-type="entity-link" >CreateManyUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FirstMigration1731061477784.html" data-type="entity-link" >FirstMigration1731061477784</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsBaseDto.html" data-type="entity-link" >GetPostsBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsDto.html" data-type="entity-link" >GetPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleTokenDto.html" data-type="entity-link" >GoogleTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatioQueryDto.html" data-type="entity-link" >PaginatioQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostMetaOptionsDto.html" data-type="entity-link" >UpdatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUserProvider.html" data-type="entity-link" >CreateUserProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataResponseInterceptor.html" data-type="entity-link" >DataResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" >GoogleAuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationProvider.html" data-type="entity-link" >PaginationProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokensProvider.html" data-type="entity-link" >TokensProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadsService.html" data-type="entity-link" >UploadsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadToAwsProvider.html" data-type="entity-link" >UploadToAwsProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersCreateManyProvider.html" data-type="entity-link" >UsersCreateManyProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/HandleDbErrorOptions.html" data-type="entity-link" >HandleDbErrorOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IActiveUser.html" data-type="entity-link" >IActiveUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGoogleUser.html" data-type="entity-link" >IGoogleUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUploadFile.html" data-type="entity-link" >IUploadFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});