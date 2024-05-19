
import React from 'react';
import resets from './_resets.module.css';
import classes from './About.module.css';
import imagAbout from '../../../public/assets/aboutUsPng.png';
import { BeforeIcon } from './BeforeIcon';
import { BeforeIcon2 } from './BeforeIcon2';
import { BeforeIcon3 } from './BeforeIcon3';
import { BeforeIcon4 } from './BeforeIcon4';
import { BeforeIcon5 } from './BeforeIcon5';
import { BeforeIcon6 } from './BeforeIcon6';
import { BeforeIcon7 } from './BeforeIcon7';
import { BeforeIcon8 } from './BeforeIcon8';

import { SvgIcon } from './SvgIcon';
import Banner from './Banner';

export default function About() {
  return (
    <div>
    <Banner/>
    <div className={`${resets.clapyResets} ${classes.root}`}>
  
    
      <div className={classes.iframe}>
        <div className={classes.body}>
          <div className={classes.divSection}>
            <div className={classes.divContainer2}>
              <div className={classes.divRow}>
                <div className={classes.divCol}>
                  <img src={imagAbout}></img>
                </div>
                <div className={classes.divCol2}>
                  <div className={classes.divSectionTitle}>
                    
                  
                    <div className={classes.pText}>
                      <div className={classes.aCoffeeShopIsASmallBusinessTha}>
                        <div className={classes.textBlock3}>
                          A coffee shop is a small business that sells coffee, pastries, and other
                        </div>
                        <div className={classes.textBlock4}>
                          morning goods. There are many different types of coffee shops around the
                        </div>
                        <div className={classes.textBlock5}>
                          world. Some have a barista, while some just have a cashier.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.divFeature1}>
                    <div className={classes.divFeatureContent}>
                      <div className={classes.heading3WESTARTAT2023}>WE START AT 2023</div>
                      <div className={classes.pFeatureText}>
                        <div className={classes.someCoffeeShopsHaveASeatingAre}>
                          <div className={classes.textBlock6}>
                            Some coffee shops have a seating area, while some just have a spot to order and
                          </div>
                          <div className={classes.textBlock7}>
                            then go somewhere else to sit down. The coffee shop that I am going to describe is a
                          </div>
                          <div className={classes.textBlock8}>place with a seating area and barista.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.divFeature12}>
                    <div className={classes.divFeatureContent2}>
                      <div className={classes.heading3WINBESTONLINESHOPAT202}>WIN BEST ONLINE SHOP AT 2023</div>
                      <div className={classes.pFeatureText2}>
                        <div className={classes.myGoalForThisCoffeeShopIsToBeA}>
                          <div className={classes.textBlock9}>
                            My goal for this coffee shop is to be able to get a coffee and get on with my day. It&#39;s
                            a
                          </div>
                          <div className={classes.textBlock10}>
                            Thursday morning and I am rushing between meetings. I need to caffeinate, but
                          </div>
                          <div className={classes.textBlock11}>
                            don&#39;t have time to sit down at the cafe for fifteen minutes.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            
          </div>
        </div>
      </div>
    </div></div>

  )
}
