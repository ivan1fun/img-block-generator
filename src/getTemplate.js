export default function (link, alt, imageUrl) {
  return `<div class="img-container center fixedwidth fullwidthOnMobile" align="center" style="padding-right: 0px;padding-left: 0px;">
  <!--[if mso]>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr style="line-height:0px">
      <td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
  <a href="${link}" style="outline:none" tabindex="-1" target="_blank">
    <img class="center fixedwidth fullwidthOnMobile" align="center" alt="${alt}" border="0" src="${imageUrl}" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 530px; max-width: 100%; display: block;" title="${alt}" width="530">
  </a>
  <!--[if mso]></td></tr></table><![endif]-->
</div>`;
}
