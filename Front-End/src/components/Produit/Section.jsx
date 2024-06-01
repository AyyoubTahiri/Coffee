import React from 'react';
import { memo } from 'react';


import resets from '../_resets.module.css';
import { _1SvgIcon } from './_1SvgIcon';
import { _2SvgIcon } from './_2SvgIcon';
import { _3SvgIcon } from './_3SvgIcon';
import { _4SvgIcon } from './_4SvgIcon';
import { _5SvgIcon } from './_5SvgIcon';
import { BeforeIcon } from './BeforeIcon';
import { BeforeIcon2 } from './BeforeIcon2';
import { BeforeIcon3 } from './BeforeIcon3';
import { BeforeIcon4 } from './BeforeIcon4';
import { BeforeIcon5 } from './BeforeIcon5';
import { BeforeIcon6 } from './BeforeIcon6';
import { BeforeIcon7 } from './BeforeIcon7';
import { BeforeIcon8 } from './BeforeIcon8';
import { ImageIcon } from './ImageIcon';
import { ItemSvgIcon } from './ItemSvgIcon';
import { ItemSvgIcon2 } from './ItemSvgIcon2';
import { ItemSvgIcon3 } from './ItemSvgIcon3';
import { ItemSvgIcon4 } from './ItemSvgIcon4';
import { ItemSvgIcon5 } from './ItemSvgIcon5';
import { ItemSvgIcon6 } from './ItemSvgIcon6';
import { ItemSvgIcon7 } from './ItemSvgIcon7';
import { ItemSvgIcon8 } from './ItemSvgIcon8';
import { ItemSvgIcon9 } from './ItemSvgIcon9';
import { ItemSvgIcon10 } from './ItemSvgIcon10';
import classes from './Section.module.css';
import { SvgIcon } from './SvgIcon';
import { SvgIcon2 } from './SvgIcon2';
import { SvgIcon3 } from './SvgIcon3';
import { SvgIcon4 } from './SvgIcon4';
import { SvgIcon5 } from './SvgIcon5';


export default function Section() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.divSlickList}>
        <div className={classes.imagesEspressoPng}></div>
        <div className={classes.frame}></div>
        <div className={classes.imagesAmericanoPng}></div>
        <div className={classes.frame2}></div>
      </div>
      <div className={classes.divSlickList2}></div>
      <div className={classes.heading6}>
        <div className={classes._30Off}>30% Off</div>
      </div>
      <div className={classes.heading2CreamyChocolateCake}>espresso</div>
      <div className={classes.heading3}>
        <div className={classes._4950}>$49.50 </div>
        <div className={classes.del5846}>$58.46</div>
        <div className={classes._8Off}>(8% off)</div>
      </div>
      <div className={classes.list}>
        <div className={classes.itemSVG}>
          <ItemSvgIcon className={classes.icon} />
        </div>
        <div className={classes.itemSVG2}>
          <ItemSvgIcon2 className={classes.icon2} />
        </div>
        <div className={classes.itemSVG3}>
          <ItemSvgIcon3 className={classes.icon3} />
        </div>
        <div className={classes.itemSVG4}>
          <ItemSvgIcon4 className={classes.icon4} />
        </div>
        <div className={classes.itemSVG5}>
          <ItemSvgIcon5 className={classes.icon5} />
        </div>
      </div>
      <div className={classes._23CustomerReview}>23 Customer Review</div>
      <div className={classes.divProductContain}>
        <div className={classes.lollipopCakeChocolateChocolate}>
          <div className={classes.textBlock}>Lollipop cake chocolate chocolate cake dessert jujubes.</div>
          <div className={classes.textBlock2}>Shortbread sugar plum dessert powder cookie sweet brownie.</div>
          <div className={classes.textBlock3}>Cake cookie apple pie dessert sugar plum muffin cheesecake.</div>
        </div>
        <div className={classes.heading4Weight}>Weight</div>
      </div>
      <div className={classes.list2}>
        <div className={classes.itemLink}>
          <div className={classes._12KG}>1/2 KG</div>
        </div>
        <div className={classes.itemLink2}>
          <div className={classes._1KG}>1 KG</div>
        </div>
        <div className={classes.itemLink3}>
          <div className={classes._15KG}>1.5 KG</div>
        </div>
        <div className={classes.itemLink4}>
          <div className={classes.redRoses}>Red Roses</div>
        </div>
        <div className={classes.itemLink5}>
          <div className={classes.withPinkRoses}>With Pink Roses</div>
        </div>
      </div>
      <div className={classes.heading4HurryUpSalesEndsIn}>Hurry up! Sales Ends In</div>
      <div className={classes.list3}>
        <div className={classes.item}>
          <div className={classes._14}>14</div>
          <div className={classes.heading6Days}>Days</div>
        </div>
        <div className={classes.item2}>
          <div className={classes._23}>23</div>
          <div className={classes.heading6Hours}>Hours</div>
          <div className={classes.unnamed}>:</div>
        </div>
        <div className={classes.item3}>
          <div className={classes._59}>59</div>
          <div className={classes.heading6Min}>Min</div>
          <div className={classes.unnamed2}>:</div>
        </div>
        <div className={classes.item4}>
          <div className={classes._56}>56</div>
          <div className={classes.heading6Sec}>Sec</div>
          <div className={classes.unnamed3}>:</div>
        </div>
      </div>
      <div className={classes.divInputGroup}>
        <button className={classes.button}>
          <div className={classes.unnamed4}>+</div>
        </button>
        <div className={classes.input}>
          <div className={classes.unnamed5}>0</div>
        </div>
        <button className={classes.button2}>
          <div className={classes.symbol}></div>
        </button>
      </div>
      <button className={classes.button3}>
        <div className={classes.addToCart}>Add To Cart</div>
      </button>
      <div className={classes.divProgressSec}>
        <div className={classes.heading6PleaseHurryOnly5LeftIn}>Please hurry! Only 5 left in stock</div>
        <div className={classes.progressbar}>
          <div className={classes.divProgressBar}></div>
        </div>
      </div>
      <div className={classes.divPickupBox}>
        <div className={classes.heading4StoreInformation}>Store Information</div>
        <div className={classes.heading4}>
          <div className={classes.lollipopCakeChocolateChocolate2}>
            <div className={classes.textBlock4}>Lollipop cake chocolate chocolate cake dessert jujubes. Shortbread</div>
            <div className={classes.textBlock5}>sugar plum dessert powder cookie sweet brownie.</div>
          </div>
        </div>
        <div className={classes.list4}>
          <div className={classes.item5}>
            <div className={classes.type}>Type : </div>
            <div className={classes.linkBlackForest}>Black Forest</div>
            <div className={classes.After}></div>
          </div>
          <div className={classes.item6}>
            <div className={classes.sKU}>SKU : </div>
            <div className={classes.linkSDFVW65467}>SDFVW65467</div>
            <div className={classes.After2}></div>
          </div>
          <div className={classes.item7}>
            <div className={classes.mFG}>MFG : </div>
            <div className={classes.linkJun42022}>Jun 4, 2022</div>
            <div className={classes.After3}></div>
          </div>
          <div className={classes.item8}>
            <div className={classes.stock}>Stock : </div>
            <div className={classes.link2ItemsLeft}>2 Items Left</div>
            <div className={classes.After4}></div>
          </div>
          <div className={classes.item9}>
            <div className={classes.tags}>Tags : </div>
            <div className={classes.linkCake}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Cake,</span>
                <span className={classes.label2}> </span>
                <span className={classes.label3}>Backery</span>
              </p>
            </div>
            <div className={classes.After5}></div>
          </div>
        </div>
        <div className={classes.divBuyBox}>
          <div className={classes.link}>
            <div className={classes.sVG}>
              <SvgIcon className={classes.icon6} />
            </div>
            <div className={classes.addToWishlist}>
              <a
                href='https://www.figma.com/file/1SU6mN72t3zs7KXFRCw6cL?type=design&node-id=15-3346&mode=design'
                target='_blank'
                rel='noreferrer'
                className={classes.textBlock6}
              >
                Add To Wishlist
              </a>
            </div>
          </div>
          <div className={classes.link2}>
            <div className={classes.sVG2}>
              <SvgIcon2 className={classes.icon7} />
            </div>
            <div className={classes.addToCompare}>
              <a
                href='https://www.figma.com/file/1SU6mN72t3zs7KXFRCw6cL?type=design&node-id=15-729&mode=design'
                target='_blank'
                rel='noreferrer'
                className={classes.textBlock7}
              >
                Add To Compare
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.heading4GuaranteedSafeCheckout}>Guaranteed Safe Checkout</div>
      <div className={classes.list5}>
        <div className={classes.itemLink1Svg}>
          <div className={classes._1SvgFill}>
            <div className={classes._1Svg}>
              <_1SvgIcon className={classes.icon8} />
            </div>
          </div>
        </div>
        <div className={classes.itemLink2Svg}>
          <div className={classes._2SvgFill}>
            <div className={classes._2Svg}>
              <_2SvgIcon className={classes.icon9} />
            </div>
          </div>
        </div>
        <div className={classes.itemLink3Svg}>
          <div className={classes._3SvgFill}>
            <div className={classes._3Svg}>
              <_3SvgIcon className={classes.icon10} />
            </div>
          </div>
        </div>
        <div className={classes.itemLink4Svg}>
          <div className={classes._4SvgFill}>
            <div className={classes._4Svg}>
              <_4SvgIcon className={classes.icon11} />
            </div>
          </div>
        </div>
        <div className={classes.itemLink5Svg}>
          <div className={classes._5SvgFill}>
            <div className={classes._5Svg}>
              <_5SvgIcon className={classes.icon12} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divVendorBox}>
        <div className={classes.divVendorContain}>
          <div className={classes.vendorPng}></div>
          <div className={classes.heading5NoodlesCo}>Noodles Co.</div>
          <div className={classes.list6}>
            <div className={classes.itemSVG6}>
              <ItemSvgIcon6 className={classes.icon13} />
            </div>
            <div className={classes.itemSVG7}>
              <ItemSvgIcon7 className={classes.icon14} />
            </div>
            <div className={classes.itemSVG8}>
              <ItemSvgIcon8 className={classes.icon15} />
            </div>
            <div className={classes.itemSVG9}>
              <ItemSvgIcon9 className={classes.icon16} />
            </div>
            <div className={classes.itemSVG10}>
              <ItemSvgIcon10 className={classes.icon17} />
            </div>
          </div>
          <div className={classes._36Reviews}>(36 Reviews)</div>
        </div>
        <div className={classes.pVendorDetail}>
          <div className={classes.noodlesCompanyIsAnAmericanFast}>
            <div className={classes.textBlock8}>Noodles &amp; Company is an American fast-casual</div>
            <div className={classes.textBlock9}>restaurant that offers international and</div>
            <div className={classes.textBlock10}>American noodle dishes and pasta.</div>
          </div>
        </div>
        <div className={classes.list7}>
          <div className={classes.item10}>
            <div className={classes.sVG3}>
              <SvgIcon3 className={classes.icon18} />
            </div>
            <div className={classes.heading5}>
              <div className={classes.address}>Address: </div>
              <div className={classes._1288FranklinAvenue}>1288 Franklin Avenue</div>
            </div>
          </div>
          <div className={classes.item11}>
            <div className={classes.sVG4}>
              <SvgIcon4 className={classes.icon19} />
            </div>
            <div className={classes.heading52}>
              <div className={classes.contactSeller}>Contact Seller: </div>
              <div className={classes._1123456789}>(+1)-123-456-789</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divHomeContain}>
        <div className={classes.heading6Seafood}>Seafood</div>
        <div className={classes.heading32}>
          <div className={classes.freshesProducts}>
            <p className={classes.labelWrapper2}>
              <span className={classes.label4}>Freshes</span>
              <span className={classes.label5}> Products</span>
            </p>
          </div>
        </div>
        <div className={classes.heading3EveryHour}>every hour</div>
        <button className={classes.button4}>
          <div className={classes.shopNow}>Shop Now</div>
          <div className={classes.symbol2}></div>
        </button>
      </div>
      <div className={classes.divSlickSlide}>
        <div className={classes.divSliderImage}></div>
        <div className={classes.imagesEspressoPng2}></div>
      </div>
      <div className={classes.divBgGradientToR}>
        <div className={classes.divContainer}>
          <div className={classes.divFlex}>
            <div className={classes.divAosInit}>
              <div className={classes.link3}>
                <div className={classes.imgMargin}>
                  <div className={classes.coffee_logoPng}></div>
                </div>
                <div className={classes.cafeBlack}>CafeBlack</div>
              </div>
            </div>
            <div className={classes.divFlex2}>
              <div className={classes.list8}>
                <div className={classes.item12}>
                  <div className={classes.linkHome}>Home</div>
                </div>
                <div className={classes.item13}>
                  <div className={classes.linkServices}>Services</div>
                </div>
                <div className={classes.item14}>
                  <div className={classes.linkAbout}>About</div>
                </div>
              </div>
              <button className={classes.button5}>
                <div className={classes.order}>Order</div>
                <div className={classes.sVG5}>
                  <SvgIcon5 className={classes.icon20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame3}>
        <div className={classes.divContainer2}>
          <div className={classes.divRow}>
            <div className={classes.divColLg4}>
              <div className={classes.divFooterWidget}>
                <div className={classes.heading53}>
                  <div className={classes.aboutInfo}>About Info</div>
                </div>
                <div className={classes.p}>
                  <div className={classes.thisIsThePerfectPlaceToFindANi}>
                    <div className={classes.textBlock11}>This is the perfect place to find a nice and cozy spot to</div>
                    <div className={classes.textBlock12}>sip some. You&#39;ll find the Java Jungle.</div>
                  </div>
                </div>
                <div className={classes.list9}>
                  <div className={classes.item15}>
                    <div className={classes.Before}>
                      <div className={classes.icon21}>
                        <BeforeIcon className={classes.icon22} />
                      </div>
                    </div>
                    <div className={classes.addresssBerkeneMorocco}>Addresss: Berkene ,Morocco</div>
                  </div>
                  <div className={classes.item16}>
                    <div className={classes.Before2}>
                      <div className={classes.icon23}>
                        <BeforeIcon2 className={classes.icon24} />
                      </div>
                    </div>
                    <div className={classes.emailAyoubtahiri104ExampleCom}>Email: ayoubtahiri104@example.com</div>
                  </div>
                  <div className={classes.item17}>
                    <div className={classes.Before3}>
                      <div className={classes.icon25}>
                        <BeforeIcon3 className={classes.icon26} />
                      </div>
                    </div>
                    <div className={classes.phone123456789}>Phone: (012) 345 6789</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divColLg3}>
              <div className={classes.divFooterWidget2}>
                <div className={classes.heading54}>
                  <div className={classes.information}>Information</div>
                </div>
                <div className={classes.list10}>
                  <div className={classes.item18}>
                    <div className={classes.link4}>
                      <div className={classes.Before4}></div>
                      <div className={classes.returnsPolicy}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock13}
                        >
                          Returns Policy
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item19}>
                    <div className={classes.link5}>
                      <div className={classes.Before5}></div>
                      <div className={classes.supportPolicy}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock14}
                        >
                          Support Policy
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item20}>
                    <div className={classes.link6}>
                      <div className={classes.Before6}></div>
                      <div className={classes.sizeGuide}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock15}
                        >
                          Size Guide
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item21}>
                    <div className={classes.link7}>
                      <div className={classes.Before7}></div>
                      <div className={classes.fAQs}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock16}
                        >
                          FAQs
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item22}>
                    <div className={classes.link8}>
                      <div className={classes.Before8}></div>
                      <div className={classes.privacyPolicy}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock17}
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divColLg32}>
              <div className={classes.divFooterWidget3}>
                <div className={classes.heading55}>
                  <div className={classes.quickLinks}>Quick Links</div>
                </div>
                <div className={classes.list11}>
                  <div className={classes.item23}>
                    <div className={classes.link9}>
                      <div className={classes.Before9}></div>
                      <div className={classes.aboutUs}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock18}
                        >
                          About us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item24}>
                    <div className={classes.link10}>
                      <div className={classes.Before10}></div>
                      <div className={classes.wishlist}>Wishlist</div>
                    </div>
                  </div>
                  <div className={classes.item25}>
                    <div className={classes.link11}>
                      <div className={classes.Before11}></div>
                      <div className={classes.myAccount}>My Account</div>
                    </div>
                  </div>
                  <div className={classes.item26}>
                    <div className={classes.link12}>
                      <div className={classes.Before12}></div>
                      <div className={classes.login}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/login.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock19}
                        >
                          Login
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item27}>
                    <div className={classes.link13}>
                      <div className={classes.Before13}></div>
                      <div className={classes.register}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/register.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock20}
                        >
                          Register
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divColLg2}>
              <div className={classes.divFooterWidget4}>
                <div className={classes.heading56}>
                  <div className={classes.followUsOn}>Follow Us On</div>
                </div>
                <div className={classes.list12}>
                  <div className={classes.item28}>
                    <div className={classes.link14}>
                      <div className={classes.Before14}>
                        <div className={classes.icon27}>
                          <BeforeIcon4 className={classes.icon28} />
                        </div>
                      </div>
                      <div className={classes.facebook}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock21}
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item29}>
                    <div className={classes.link15}>
                      <div className={classes.Before15}>
                        <div className={classes.icon29}>
                          <BeforeIcon5 className={classes.icon30} />
                        </div>
                      </div>
                      <div className={classes.twitter}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock22}
                        >
                          Twitter
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item30}>
                    <div className={classes.link16}>
                      <div className={classes.Before16}>
                        <div className={classes.icon31}>
                          <BeforeIcon6 className={classes.icon32} />
                        </div>
                      </div>
                      <div className={classes.instagram}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock23}
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item31}>
                    <div className={classes.link17}>
                      <div className={classes.Before17}>
                        <div className={classes.icon33}>
                          <BeforeIcon7 className={classes.icon34} />
                        </div>
                      </div>
                      <div className={classes.youtube}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock24}
                        >
                          Youtube
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item32}>
                    <div className={classes.link18}>
                      <div className={classes.Before18}>
                        <div className={classes.icon35}>
                          <BeforeIcon8 className={classes.icon36} />
                        </div>
                      </div>
                      <div className={classes.pinterest}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock25}
                        >
                          Pinterest
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divContainer3}></div>
        <div className={classes.divColMdAuto}></div>
        <div className={classes.divRow2}>
          <div className={classes.divColMdAutoMargin}>
            <div className={classes.divColMdAuto2}>
              <div className={classes.pFooterCopyright}></div>
            </div>
          </div>
          <div className={classes.divColMdAutoMargin2}></div>
          <div className={classes.divFooterPayment}></div>
          <div className={classes.footerPaymentPng}></div>
        </div>
      </div>
      <div className={classes.divStickyBottomCart}>
        <div className={classes.heading62}>
          <div className={classes._3296}>$32.96</div>
        </div>
        <div className={classes._55Off}>55% off</div>
        <div className={classes.imagesEspressoPng3}></div>
        <div className={classes.heading5CreamyChocolateCake}>Espresso</div>
        <div className={classes.heading7}></div>
        <div className={classes.options}>
          <div className={classes.imageFill}>
            <div className={classes.image}>
              <ImageIcon className={classes.icon37} />
            </div>
          </div>
          <div className={classes.div}>
            <div className={classes.chooseWeight}>Choose Weight...</div>
          </div>
        </div>
        <div className={classes.divInputGroup2}>
          <button className={classes.button6}>
            <div className={classes.symbol3}></div>
          </button>
          <div className={classes.input2}>
            <div className={classes.div2}>
              <div className={classes._1}>1</div>
            </div>
          </div>
          <button className={classes.button7}>
            <div className={classes.unnamed6}>+</div>
          </button>
        </div>
        <div className={classes.link19}>
          <div className={classes.symbol4}>
            <a
              href='https://www.figma.com/file/1SU6mN72t3zs7KXFRCw6cL?type=design&node-id=14-1312&mode=design'
              target='_blank'
              rel='noreferrer'
              className={classes.textBlock26}
            >
              
            </a>
          </div>
          <div className={classes.addToCart2}>
            <a
              href='https://www.figma.com/file/1SU6mN72t3zs7KXFRCw6cL?type=design&node-id=14-1312&mode=design'
              target='_blank'
              rel='noreferrer'
              className={classes.textBlock27}
            >
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
