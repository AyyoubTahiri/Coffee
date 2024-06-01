import { memo } from 'react';
import React from 'react';


import resets from './_resets.module.css';
import { BeforeIcon } from './BeforeIcon';
import { BeforeIcon2 } from './BeforeIcon2';
import { BeforeIcon3 } from './BeforeIcon3';
import { BeforeIcon4 } from './BeforeIcon4';
import { BeforeIcon5 } from './BeforeIcon5';
import { BeforeIcon6 } from './BeforeIcon6';
import { BeforeIcon7 } from './BeforeIcon7';
import { BeforeIcon8 } from './BeforeIcon8';
import classes from './Contact.module.css';
import { ImageIcon } from './ImageIcon';
import { ImageIcon2 } from './ImageIcon2';
import { ImageIcon3 } from './ImageIcon3';
import { SvgIcon } from './SvgIcon';


export default function Contact(){
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.divContainerFluid}>
        <div className={classes.divDFlex}>
          <div className={classes.heading1Margin}>
            <div className={classes.heading1Contact}>Contact</div>
          </div>
          <div className={classes.divDInlineFlexMargin}>
            <div className={classes.divDInlineFlex}>
              <div className={classes.pM}>
                <div className={classes.linkHome}>Home</div>
              </div>
              <div className={classes.pM2}>
                <div className={classes.unnamed}>/</div>
              </div>
              <div className={classes.pM3}>
                <div className={classes.contact}>Contact</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className={classes.divContainer}>
        <div className={classes.divSectionTitle}>
          <div className={classes.heading4}>
            <div className={classes.contactUs}>Contact Us</div>
          </div>
          <div className={classes.heading1}>
            <div className={classes.feelFreeToContact}>Feel Free To Contact</div>
          </div>
          <div className={classes.After2}></div>
        </div>
        





        ffffffffff
        
      </div>
      
  
    </div>
  );
};
