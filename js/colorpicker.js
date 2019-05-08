let colorArray = [];
const pickr5 = new Pickr({
  el: '#color-picker-5',
  default: "030303",
  useAsButton: true,
  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  },

  onSave(hsva, instance) {
    colorArray.push({
      hex: hsva.toHEX().toString(),
      rgba: hsva.toRGBA().toString(),
      hsla: hsva.toHSLA().toString(),
      hsva: hsva.toHSVA().toString(),
      cmyk: hsva.toCMYK().toString()
    });
    copyToClipboard();
  }
});

function copyToClipboard() {

  const el = document.createElement('textarea');
  colorArray.forEach(function (elem) {
    el.value += '{';
    el.value += 'hex: ' + "'" + elem.hex + "'" + ', ';
    el.value += 'rgba: ' + "'" + elem.rgba + "'" + ', ';
    el.value += 'hsla: ' + "'" + elem.hsla + "'" + ', ';
    el.value += 'hsva: ' + "'" + elem.hsva + "'" + ', ';
    el.value += 'cmyk: ' + "'" + elem.cmyk + "'";
    el.value += '}, ';
  });
  $(el).attr('readonly', '');
  $(el).css('position', 'absolute');
  $(el).css('left', '-9999px');
  $(el).appendTo(document.body);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
