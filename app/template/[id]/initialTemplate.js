export const initialTemplate = `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width" name="viewport">

<style data-premailer="ignore">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=latin,cyrillic')
</style>
<style>body {
width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0;
}
.ExternalClass {
width: 100%;
}
.ExternalClass {
line-height: 100%;
}
#backgroundTable {
margin: 0; padding: 0; width: 100% !important; line-height: 100% !important;
}
body {
background-color: #ededed; background-repeat: repeat; background-position: center top;
}
body {
color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; padding: 0; margin: 0; text-align: left; line-height: 1.3;
}
a:hover {
color: #2795b6;
}
a:active {
color: #2795b6;
}
a:visited {
color: #2ba6cb;
}
h1 a:active {
color: #2ba6cb !important;
}
h2 a:active {
color: #2ba6cb !important;
}
h3 a:active {
color: #2ba6cb !important;
}
h4 a:active {
color: #2ba6cb !important;
}
h5 a:active {
color: #2ba6cb !important;
}
h6 a:active {
color: #2ba6cb !important;
}
h1 a:visited {
color: #2ba6cb !important;
}
h2 a:visited {
color: #2ba6cb !important;
}
h3 a:visited {
color: #2ba6cb !important;
}
h4 a:visited {
color: #2ba6cb !important;
}
h5 a:visited {
color: #2ba6cb !important;
}
h6 a:visited {
color: #2ba6cb !important;
}
table.secondary:hover td {
background: #d0d0d0 !important; color: #555555;
}
table.secondary:hover td a {
color: #555555 !important;
}
table.secondary td a:visited {
color: #555555 !important;
}
table.secondary:active td a {
color: #555555 !important;
}
table.success:hover td {
background: #457a1a !important;
}
table.alert:hover td {
background: #970b0e !important;
}
body.outlook p {
display: inline !important;
}
@media only screen and (min-width: 768px) {
  table.container {
    width: 580px !important;
  }
  .mail .hide-for-desktop {
    display: none !important;
  }
  .mail .hide-and-true {
    display: none;
  }
  .mail .hide-and-false {
    display: block !important;
  }
  .mail .hide-or-true {
    display: none !important;
  }
}
@media only screen and (max-width: 600px) {
  .mail img {
    max-width: 100% !important; max-height: 100% !important; padding: 0 !important; width: auto !important; height: auto !important;
  }
  .mail .social img {
    width: inherit !important;
  }
  .mail img.normal {
    width: inherit !important;
  }
  .mail center {
    min-width: 0 !important;
  }
  .mail .container {
    width: 100% !important;
  }
  .mail .row {
    width: 100% !important; display: block !important;
  }
  .mail .wrapper {
    display: block !important; padding-right: 0 !important;
  }
  .mail .columns {
    table-layout: fixed !important; float: none !important; width: 100% !important; padding-right: 0px !important; padding-left: 0px !important; display: block !important;
  }
  .mail .column {
    table-layout: fixed !important; float: none !important; width: 100% !important; padding-right: 0px !important; padding-left: 0px !important; display: block !important;
  }
  .mail .wrapper.first .columns {
    display: table !important;
  }
  .mail .wrapper.first .column {
    display: table !important;
  }
  .mail table.columns > tbody > tr > td {
    width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
  }
  .mail table.column > tbody > tr > td {
    width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
  }
  .mail .columns td.one {
    width: 8.333333% !important;
  }
  .mail .column td.one {
    width: 8.333333% !important;
  }
  .mail .columns td.two {
    width: 16.666666% !important;
  }
  .mail .column td.two {
    width: 16.666666% !important;
  }
  .mail .columns td.three {
    width: 25% !important;
  }
  .mail .column td.three {
    width: 25% !important;
  }
  .mail .columns td.four {
    width: 33.333333% !important;
  }
  .mail .column td.four {
    width: 33.333333% !important;
  }
  .mail .columns td.five {
    width: 41.666666% !important;
  }
  .mail .column td.five {
    width: 41.666666% !important;
  }
  .mail .columns td.six {
    width: 50% !important;
  }
  .mail .column td.six {
    width: 50% !important;
  }
  .mail .columns td.seven {
    width: 58.333333% !important;
  }
  .mail .column td.seven {
    width: 58.333333% !important;
  }
  .mail .columns td.eight {
    width: 66.666666% !important;
  }
  .mail .column td.eight {
    width: 66.666666% !important;
  }
  .mail .columns td.nine {
    width: 75% !important;
  }
  .mail .column td.nine {
    width: 75% !important;
  }
  .mail .columns td.ten {
    width: 83.333333% !important;
  }
  .mail .column td.ten {
    width: 83.333333% !important;
  }
  .mail .columns td.eleven {
    width: 91.666666% !important;
  }
  .mail .column td.eleven {
    width: 91.666666% !important;
  }
  .mail .columns td.twelve {
    width: 100% !important;
  }
  .mail .column td.twelve {
    width: 100% !important;
  }
  .mail td.offset-by-eleven {
    padding-left: 0 !important;
  }
  .mail td.offset-by-ten {
    padding-left: 0 !important;
  }
  .mail td.offset-by-nine {
    padding-left: 0 !important;
  }
  .mail td.offset-by-eight {
    padding-left: 0 !important;
  }
  .mail td.offset-by-seven {
    padding-left: 0 !important;
  }
  .mail td.offset-by-six {
    padding-left: 0 !important;
  }
  .mail td.offset-by-five {
    padding-left: 0 !important;
  }
  .mail td.offset-by-four {
    padding-left: 0 !important;
  }
  .mail td.offset-by-three {
    padding-left: 0 !important;
  }
  .mail td.offset-by-two {
    padding-left: 0 !important;
  }
  .mail td.offset-by-one {
    padding-left: 0 !important;
  }
  .mail table.columns td.expander {
    width: 1px !important;
  }
  .mail .right-text-pad {
    padding-left: 10px !important;
  }
  .mail .text-pad-right {
    padding-left: 10px !important;
  }
  .mail .left-text-pad {
    padding-right: 10px !important;
  }
  .mail .text-pad-left {
    padding-right: 10px !important;
  }
  .mail .hide-for-small {
    display: none !important;
  }
  .mail .show-for-desktop {
    display: none !important;
  }
  .mail .show-for-small {
    display: block !important; width: auto !important; overflow: visible !important;
  }
  .mail .hide-for-desktop {
    display: block !important; width: auto !important; overflow: visible !important;
  }
  .mail .button-hide-for-small {
    display: none !important;
  }
  .mail .button-show-for-desktop {
    display: none !important;
  }
  .mail .button-show-for-small {
    display: table !important; overflow: visible !important;
  }
  .mail .button-hide-for-desktop {
    display: table !important; overflow: visible !important;
  }
  .mail .hide-and-true {
    display: none;
  }
  .mail .hide-and-false {
    display: block !important;
  }
  .mail .hide-or-true {
    display: none !important;
  }
}
</style></head>
<body style="width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; background: #ededed repeat center top; margin: 0; padding: 0;" bgcolor="#ededed">
<table class="mail" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; height: 100%; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; background: #ededed repeat center top; margin: 0; padding: 0;" bgcolor="#ededed">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" class="center" valign="top" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;">
<center style="width: 100%; min-width: 580px;">
<table class="row" style="text-align: center; border-spacing: 0; border-collapse: collapse; vertical-align: top; width: 100%; position: relative; background: #252525 repeat center top; padding: 0px;" bgcolor="#252525">
<tbody><tr style="text-align: center; vertical-align: top; padding: 0;" align="center">
<td style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="center" valign="top">
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 20px 0px 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 180px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table align="left" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="left" style="text-align: left; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='logo' src='https://app.makemail.ru/content/a26c6a04a32c38212021bbe8b7effa6b.png' width='180'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="logo" class="left" height="48" src="https://app.makemail.ru/content/a26c6a04a32c38212021bbe8b7effa6b.png" style="width: 180px; height: 48px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: left; clear: both; display: block;" width="180" align="left">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px;" align="left" valign="top">
<table class="eight columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 380px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 5px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="color: #7f8c8d;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt&nbsp;</span></p>
</td>
</tr>
</tbody></table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 0px;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 20px 0px 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 280px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='product1' src='https://app.makemail.ru/content/e0092a70323f9b21f502e5fd47e9d3d8.jpg' width='209'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="product1" class="center" height="245" src="https://app.makemail.ru/content/e0092a70323f9b21f502e5fd47e9d3d8.jpg" style="width: 209px; height: 245px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="209" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 280px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<h1 style="color: #222222; font-family: Trebuchet MS, sans-serif; font-weight: normal; font-size: 40px; text-align: left; line-height: 1.3; word-break: normal; margin: 0; padding: 0;" align="left"><strong>New Balance 572 всего за:</strong></h1>
</td>
</tr>
</tbody></table>

<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="width: 46% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="46%" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<h1 style="text-align: center; color: #222222; font-family: Trebuchet MS, sans-serif; font-weight: normal; font-size: 40px; line-height: 1.3; word-break: normal; margin: 0; padding: 0;" align="center"><strong><span style="color: #f21e64;">2900&nbsp;</span><span style="color: #999ba4;"><span style="font-size: 14px;">руб.</span></span></strong></h1>
</td>
</tr>
</tbody></table>


</td>
<td height="%" style="width: 54% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="54%" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="color: #999ba4;"><s><span style="font-size: 16px;"><span style="font-family: trebuchet ms,sans-serif;"><strong>4890 руб.</strong></span></span></s></span></p>
</td>
</tr>
</tbody></table>


</td>
</tr>
</tbody>
</table>

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="width: 72% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="72%" align="left" valign="top">
<table class="button" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; overflow: hidden; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; width: auto !important; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; display: block; line-height: initial !important; margin: 0; padding: 0px;" align="center" valign="top">
<!--[if mso]>
<p style='line-height:0;margin:0;'>&nbsp;</p>
<v:roundrect arcsize='19%' fill='t' fillcolor='#f21e64' href='' stroke='f' strokecolor='' strokeweight='1px' style='v-text-anchor:middle;width:202px;height:44px;mso-padding-alt:0;padding:11px 20px;' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word'>
<w:anchorlock>
<center style='color: #FFF; font-family:sans-serif; font-size:13px; font-weight:bold; mso-line-height-rule:exactly; mso-text-raise:4px'>
ПОДРОБНЕЕ →
</center>
</w:anchorlock>
</v:roundrect>
<![endif]-->
<!--[if !mso]>
<!---->
<a href="" style="display: block; width: auto; border-radius: 19px; -webkit-border-radius: 19px; -moz-border-radius: 19px; color: #ffffff; text-decoration: none; font-weight: bold; font-family: Open Sans, sans-serif; font-size: 16px; text-align: center; height: 100%; background: #f21e64 repeat center center; padding: 11px 20px;">ПОДРОБНЕЕ →</a>
<!-- <![endif]-->
<!--[endif]---->
</td>
</tr>
</tbody></table>


</td>
<td height="%" style="width: 28% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="28%" align="left" valign="top">

</td>
</tr>
</tbody>
</table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 0px;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 25px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<h2 style="text-align: center; color: #222222; font-family: Trebuchet MS, sans-serif; font-weight: normal; font-size: 20px; line-height: 1.3; word-break: normal; margin: 0; padding: 0;" align="center"><strong>Заголовок вашей темы</strong></h2><p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-size: 16px;">Сервисная стратегия интуитивно консолидирует рекламный клаттер. Презентация позиционирует из ряда вон выходящий SWOT-анализ.</span></p>
</td>
</tr>
</tbody></table>

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 0px;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 20px 0px 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 180px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='product2' src='https://app.makemail.ru/content/a2575640f6c277f083cfb8c4a3396b0c.jpg' width='145'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="product2" class="center" height="75" src="https://app.makemail.ru/content/a2575640f6c277f083cfb8c4a3396b0c.jpg" style="width: 145px; height: 75px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="145" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 18px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 16px;"><a href="http://ya.ru" style="color: #2ba6cb; text-decoration: none;">New Balance 573C</a></span></p>
</td>
</tr>
</tbody></table>

<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="width: 58% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="58%" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><strong><span style="color: #f21e64;"><span style="font-size: 26px;">2900</span>&nbsp;</span><span style="color: #999ba4;"><span style="font-size: 14px;">р.</span></span></strong></p>
</td>
</tr>
</tbody></table>


</td>
<td height="%" style="width: 42% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="42%" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-size: 14px;"><span style="color: #999ba4;"><s><span style="font-family: trebuchet ms,sans-serif;"><strong>4890 р.</strong></span></s></span></span></p>
</td>
</tr>
</tbody></table>


</td>
</tr>
</tbody>
</table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 20px 0px 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 180px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='product3' src='https://app.makemail.ru/content/83fcb34f789bdfd26f7eb9cd1d712bdf.jpg' width='147'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="product3" class="center" height="77" src="https://app.makemail.ru/content/83fcb34f789bdfd26f7eb9cd1d712bdf.jpg" style="width: 147px; height: 77px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="147" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 15px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 16px;"><a href="http://ya.ru" style="color: #2ba6cb; text-decoration: none;">New Balance 574C</a></span></p>
</td>
</tr>
</tbody></table>

<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="width: 58% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="58%" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><strong><span style="color: #f21e64;"><span style="font-size: 26px;">2900</span>&nbsp;</span><span style="color: #999ba4;"><span style="font-size: 14px;">р.</span></span></strong></p>
</td>
</tr>
</tbody></table>


</td>
<td height="%" style="width: 42% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="42%" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-size: 14px;"><span style="color: #999ba4;"><s><span style="font-family: trebuchet ms,sans-serif;"><strong>4890 р.</strong></span></s></span></span></p>
</td>
</tr>
</tbody></table>


</td>
</tr>
</tbody>
</table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 180px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='product4' src='https://app.makemail.ru/content/8baf6c6a90f8c6d6bfa6bb5bd4111243.jpg' width='147'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="product4" class="center" height="77" src="https://app.makemail.ru/content/8baf6c6a90f8c6d6bfa6bb5bd4111243.jpg" style="width: 147px; height: 77px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="147" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 15px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 16px;"><a href="http://ya.ru" style="color: #2ba6cb; text-decoration: none;">New Balance 57</a></span></p>
</td>
</tr>
</tbody></table>

<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="width: 58% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="58%" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><strong><span style="color: #f21e64;"><span style="font-size: 26px;">2900</span>&nbsp;</span><span style="color: #999ba4;"><span style="font-size: 14px;">р.</span></span></strong></p>
</td>
</tr>
</tbody></table>


</td>
<td height="%" style="width: 42% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="42%" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-size: 14px;"><span style="color: #999ba4;"><s><span style="font-family: trebuchet ms,sans-serif;"><strong>4890 р.</strong></span></s></span></span></p>
</td>
</tr>
</tbody></table>


</td>
</tr>
</tbody>
</table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 0px;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 20px 0px 0px;" align="left" valign="top">
<table class="three columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 130px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">

</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 20px 0px 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 280px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table class="button" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; overflow: hidden; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; width: auto !important; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; display: block; line-height: initial !important; margin: 0; padding: 0px;" align="center" valign="top">
<!--[if mso]>
<p style='line-height:0;margin:0;'>&nbsp;</p>
<v:roundrect arcsize='19%' fill='t' fillcolor='#f21e64' href='' stroke='f' strokecolor='' strokeweight='1px' style='v-text-anchor:middle;width:280px;height:44px;mso-padding-alt:0;padding:11px 20px;' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word'>
<w:anchorlock>
<center style='color: #FFF; font-family:sans-serif; font-size:13px; font-weight:bold; mso-line-height-rule:exactly; mso-text-raise:4px'>
ПОДРОБНЕЕ →
</center>
</w:anchorlock>
</v:roundrect>
<![endif]-->
<!--[if !mso]>
<!---->
<a href="" style="display: block; width: auto; border-radius: 19px; -webkit-border-radius: 19px; -moz-border-radius: 19px; color: #ffffff; text-decoration: none; font-weight: bold; font-family: Open Sans, sans-serif; font-size: 16px; text-align: center; height: 100%; background: #f21e64 repeat center center; padding: 11px 20px;">ПОДРОБНЕЕ →</a>
<!-- <![endif]-->
<!--[endif]---->
</td>
</tr>
</tbody></table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px;" align="left" valign="top">
<table class="three columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 130px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">

</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 0px;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<hr class="" style="color: #d9d9d9; background-color: #d9d9d9; height: 1px; border: none;">

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 26px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<h2 style="text-align: center; color: #222222; font-family: Trebuchet MS, sans-serif; font-weight: normal; font-size: 20px; line-height: 1.3; word-break: normal; margin: 0; padding: 0;" align="center"><strong>Следите за акциями и скидками:</strong></h2>
</td>
</tr>
</tbody></table>

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>

<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<div class="center social" style="text-align: center;" align="center">
<a href="" style="padding-right: 5px; text-decoration: none; color: #2ba6cb;">
<img alt="" src="https://app.makemail.ru/content/83e3f9be6fb6ee8fcba140ad8044fdd1.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: inherit; clear: both; display: inline; border: none;" align="inherit">
</a>
<!--[if mso]>
&nbsp;
<![endif]-->
<a href="" style="padding-right: 5px; text-decoration: none; color: #2ba6cb;">
<img alt="" src="https://app.makemail.ru/content/3cd9eb712511364665844ccac400c606.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: inherit; clear: both; display: inline; border: none;" align="inherit">
</a>
<!--[if mso]>
&nbsp;
<![endif]-->
<a href="" style="padding-right: 5px; text-decoration: none; color: #2ba6cb;">
<img alt="" src="https://app.makemail.ru/content/fb5d1cfbf3f6ecf025e56238d44e05ee.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: inherit; clear: both; display: inline; border: none;" align="inherit">
</a>
<!--[if mso]>
&nbsp;
<![endif]-->
</div>
</td>
</tr>
</tbody></table>

<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 10px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="color: #A9A9A9;">Компания: [%company-name%]<br>Адрес:&nbsp;[%company-address%]<br>Телефон:&nbsp;[%company-phone%]</span></p>
</td>
</tr>
</tbody></table>

<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="color: #A9A9A9;">Вы получили это письмо на электронный адрес [%email%], так как являетесь клиентом [%company-name%]</span></p>
</td>
</tr>
</tbody></table>

<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px;" align="center" bgcolor="transparent" valign="top">
Если вы не хотите больше получать наши письма, просто перейдите по ссылке
<a href="[%unsubscribe_link%]" style="color: #2ba6cb; text-decoration: none;">отказаться от рассылки</a>
</td>
</tr>
</tbody></table>


</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #222222; font-family: Open Sans, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

</center>
</td>
</tr>
</tbody></table>




</body></html>`
