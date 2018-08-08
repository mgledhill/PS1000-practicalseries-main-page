

/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                    00-00-COVER-SCROLL.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   www.practicalseries.com

-------------------------------------------------------------------------------
DETAILS         LOCAL SCROLL FUNCTIONS

jQuery is using version 3.1.0 from the GoogleAPIs library.

This script applies the scroll to a point within the page (srollTop)
functionality for the current page.

-------------------------------------------------------------------------------
NAMING CONVENTIONS

Each <section> of the site has a waypoint (WP) reference number that identifies
the start of each section. These are id attributes and have the format:

        #js--ccssii

    where:  cc - chapter number
            ss - subsection number
            ii - inline section number

The six digit number is unique to each section, i.e. section 2.1.3
would have waypoint reference js--020103

The trigger class used in the <a> element to trigger the scroll to the waypoint
has the name .js-sc-000000 where the six digit number matches the waypoint
number of the section that is to be scrolled to.

The scrolltop function has an offset of -60px to ensure the title is visible
below the fixed navigation bar.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
07 Aug 2018   R02          M. Gledhill    Second release (no changes)

31 May 2017   P10          M. Gledhill    Migration to Git VCS
                                          FIRST PUBLISHED COMMIT
                                          Based on PS(LIVE-non VCS) P06.02

                                          - .aside-revision class
                                            name change (.aside-right-rev)
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No jQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                  /* START OF PAGE READY FUNCTION */

/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('.aside-right-rev').append (
        "<p>cover-scroll.js&nbsp;&mdash;&nbsp;R02</p>" /* LOCAL JS REVISION NUMBER */
    );






/* ****************************************************************************
   SCROLL TO SECTION
   ****************************************************************************
   This holds several scrollTop functions that scroll from the TOC to the
   specified section. There is one click function per <a> within the TOC
   ************************************************************************* */


 /* ---------------------------------------------------------------------------
   SCROLL TO TOP
   The offset is set to .to -80 - e.g.

          $('.js--sc-000000').click(function () {
           $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-000000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });                                         /* END of scroll function */


 /* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

          $('.js--sc-nn0000').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0000').offset().top -10}, 1000);
          });
   ------------------------------------------------------------------------- */


  /* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

          $('.js--sc-nn0100').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0100').offset().top -20}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-000100').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--000100').offset().top }, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-000101').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--000101').offset().top }, 1000);
    });                                         /* END of scroll function */



 /* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

          $('.js--sc-nn0101a').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
          });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  CROSS REFERENCES
   For figures, the offset is set to .to -80 - e.g.

          $('.js--sc-fnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--fnn-01').offset().top -80}, 1000);
          });

   For tables, the offset is set to .to -60 - e.g.

          $('.js--sc-tnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--tnn-01').offset().top -60}, 1000);
          });
   ------------------------------------------------------------------------- */
/* ****************************************************************************
   SWAP SVG IMAGES FOR PNG IMAGES IF VIEWED WITH INTERNET EXPLORER
   ****************************************************************************
   Internet Explorer does not scale svg image properly, this is true even of
   the latest version (IE11). Edge is fine.

   The following jQuery creates a function called IEgetVer. This returns
   the following:

        FALSE = Browser is not IE or Edge

        1     = Internet Explorer version 1-11

        2     = Edge version numbers start at 12

    The result is stored in the variable version.

    If version is 1, then the browser is a version of Internet Explorer and
    all filename.svg images are changed to filename.png. Note the name doesn’t
    change, just the extension. The .png file must also be stored in the same
    location as the .svg file.

    The code finds the number of img elements on the page (variable imgs).
    It then checks the src attribute of each occurrence to see if it ends
    in .svg (this is the /.*\.svg$/ meta character string).

    If it does the last three characters are taken off with the slice command
    and png added in place.
   ************************************************************************* */

    var version = IEgetVer();

    if (version === false) { /* === test the type of the result (rather than value) */
                             /* Browser is not IE or Edge */
    }

    else if (version >= 2) { /* Browser is Edge (version number is >= 12) */

    }

    else {                   /* Browser is IE */
        var imgs = document.getElementsByTagName('img');
        var svgExtension = /.*\.svg$/   /* this basically finds *.svg - they are called meta charcters */
        var l = imgs.length;
        for(var i = 0; i < l; i++) {
            if(imgs[i].src.match(svgExtension)) {
                imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
            }
        }
    }


/* ----------------------------------------------------------------------------
   FUNCTION IEgetVer - DETECT IE AND EDGE
   ----------------------------------------------------------------------------
   The function IEgetVer uses the useragent command to get browser information

   The following browsers return the following ua:

     IE 10   ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

     IE 11   ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

     Edge 12 ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
                   like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

     Edge 13 ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                   (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

   The string is decoded using the IndexOf function (returns position of
   characters in string).

     If it contains the string MSIE it is an early version of IE (10 or earlier)

     If it contains the string Trident, it is IE 11

     If it contains the string Edge it is Edge

   The returned value is the extracted version or revision number of the
   browser, the function returns FALSE if the browser is not IE or EDGE.

   The ParseInt function returns
   --------------------------------------------------------------------------- */

    function IEgetVer() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {     /* IE 10 or older - Return 1  */
            return 1;
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {  /* IE 11 - Return 1 */
            var rv = ua.indexOf('rv:');
            return 1;
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {     /* Edge (IE 12+) - Return 2 */
            return 2;
        }

      // other browser - Return FALSE
      return false;
    }
/* ************************************************************************* */


});                                             /* END OF PAGE READY FUNCTION */
