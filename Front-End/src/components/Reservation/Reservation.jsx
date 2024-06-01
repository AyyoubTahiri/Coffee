import React from 'react';
import { ImageIcon } from './ImageIcon';
import classes from './Reservation.module.css';
import { SvgIcon } from './SvgIcon';




export default function Reservation() {
  return (
    <div>
    <div className={`${resets.clapyResets} ${classes.root}`}>
    <div className={classes.divBgGradientToR}>
      <div className={classes.divContainer}>
        <div className={classes.divFlex}>
          <div className={classes.divAosInit}>
            <div className={classes.link}>
              <div className={classes.imgMargin}>
                <div className={classes.coffee_logoPng}></div>
              </div>
              <div className={classes.cafeBlack}>CafeBlack</div>
            </div>
          </div>
          <div className={classes.divFlex2}>
            <div className={classes.list}>
              <div className={classes.item}>
                <div className={classes.linkHome}>Home</div>
              </div>
              <div className={classes.item2}>
                <div className={classes.linkServices}>
                  <a
                    href='http://localhost:5173/#services'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.textBlock}
                  >
                    Services
                  </a>
                </div>
              </div>
              <div className={classes.item3}>
                <div className={classes.linkAbout}>About</div>
              </div>
            </div>
            <button className={classes.button}>
              <div className={classes.order}>Order</div>
              <div className={classes.sVG}>
                <SvgIcon className={classes.icon} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.divContainerFluid}>
      <div className={classes.divDFlex}>
        <div className={classes.heading1Margin}>
          <div className={classes.heading1Reservation}>Reservation</div>
        </div>
        <div className={classes.divDInlineFlexMargin}>
          <div className={classes.divDInlineFlex}>
            <div className={classes.pM}>
              <div className={classes.linkHome2}>Home</div>
            </div>
            <div className={classes.pM2}>
              <div className={classes.unnamed}>/</div>
            </div>
            <div className={classes.pM3}>
              <div className={classes.reservation}>Reservation</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.After}></div>
    </div>
    <div className={classes.divContainer2}>
      <div className={classes.divReservation}>
        <div className={classes.divRow}>
          <div className={classes.divColLg6}>
            <div className={classes.divP5}>
              <div className={classes.divMb4}>
                <div className={classes.heading1}>
                  <div className={classes._30OFF}>30% OFF</div>
                </div>
                <div className={classes.heading12}>
                  <div className={classes.forOnlineReservation}>For Online Reservation</div>
                </div>
              </div>
              <div className={classes.pTextWhite}>
                <div className={classes.loremJustoClitaEratLoremLabore}>
                  <div className={classes.textBlock2}>Lorem justo clita erat lorem labore ea, justo dolor lorem</div>
                  <div className={classes.textBlock3}>ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat</div>
                  <div className={classes.textBlock4}>justo sed sed diam. Ea et erat ut sed diam sea</div>
                </div>
              </div>
              <div className={classes.list2}>
                <div className={classes.item4}>
                  <div className={classes.symbol}></div>
                  <div className={classes.loremIpsumDolorSitAmet}>Lorem ipsum dolor sit amet</div>
                </div>
                <div className={classes.item5}>
                  <div className={classes.symbol2}></div>
                  <div className={classes.loremIpsumDolorSitAmet2}>Lorem ipsum dolor sit amet</div>
                </div>
                <div className={classes.item6}>
                  <div className={classes.symbol3}></div>
                  <div className={classes.loremIpsumDolorSitAmet3}>Lorem ipsum dolor sit amet</div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divColLg62}>
            <div className={classes.divTextCenter}>
              <div className={classes.heading13}>
                <div className={classes.bookYourTable}>Book Your Table</div>
              </div>
              <div className={classes.form}>
                <div className={classes.input}>
                  <div className={classes.divPlaceholder}>
                    <div className={classes.name}>Name</div>
                  </div>
                </div>
                <div className={classes.input2}>
                  <div className={classes.divPlaceholder2}>
                    <div className={classes.email}>Email</div>
                  </div>
                </div>
                <div className={classes.input3}>
                  <div className={classes.divPlaceholder3}>
                    <div className={classes.date}>Date</div>
                  </div>
                </div>
                <div className={classes.input4}>
                  <div className={classes.divPlaceholder4}>
                    <div className={classes.time}>Time</div>
                  </div>
                </div>
                <div className={classes.divFormGroup}>
                  <div className={classes.options}>
                    <div className={classes.imageFill}>
                      <div className={classes.image}>
                        <ImageIcon className={classes.icon2} />
                      </div>
                    </div>
                    <div className={classes.div}>
                      <div className={classes.person}>Person</div>
                    </div>
                  </div>
                </div>
                <button className={classes.button2}>
                  <div className={classes.bookNow}>Book Now</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Before}></div>
        <div className={classes.After2}></div>
      </div>
    </div>
  </div>
    </div>
  )
}


;
