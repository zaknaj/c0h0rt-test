const adidasLogo =
  "https://scontent.fist6-3.fna.fbcdn.net/v/t1.6435-9/59854627_10156233049988531_7711672676854530048_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrEL6WecEPuflew45uKtf-neQf21R-Ybed5B_bVH5ht48u4-ewffaj6OgXaaEQhHLaSxN97Tr2IcvVVb2ggbEg&_nc_ohc=J7zLTf4OnGIAX8HWEOD&tn=vjf_YzGPlC2UJynZ&_nc_ht=scontent.fist6-3.fna&oh=00_AT9pHhAxqanpWOzRdaJSlG0AnaK6zHhjnw0Z8068GpgGuw&oe=62D805D2";
const adidasBanner = "https://cdn.wallpapersafari.com/13/30/82cPHq.jpg";
const adidasData = ["Adidas Originals", adidasLogo, adidasBanner, 2];

const etamLogo =
  "https://play-lh.googleusercontent.com/W37I_2fpHwOnDF39KCITDojK5xjfGz64irRe5s0O4gUiD0_jUCGhpQkkETpNhRA7FYRJ";
const etamBanner =
  "https://media.vogue.fr/photos/5f1034aa3d4f93f2e24bfe1c/master/w_1600,c_limit/20200205_ETAMPostOp_MarinLaborne_Look_9_180-1.jpg";
const etamData = ["Etam", etamLogo, etamBanner, 1];

const schottLogo =
  "https://brandmade.tv/wp-content/uploads/2018/06/Schott-logo-1024x585.jpg";
const schottBanner =
  "https://cdn11.bigcommerce.com/s-gemc6adefl/images/stencil/original/products/1198/14446/LELB2056__46621.1596807075.jpg?c=2&imbypass=on&imbypass=on";
const schottData = ["Schott", schottLogo, schottBanner, 4];

let data = [];

new Array(20)
  .fill("")
  .forEach(() => data.push(...[adidasData, etamData, schottData]));

module.exports = data;
