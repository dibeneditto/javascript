function sharePagetoEmail() {
  var a = fixedEncodeURIComponent("user@example.com");
  var b = "?subject=" + fixedEncodeURIComponent(document.title), c = "&body=" + fixedEncodeURIComponent(document.URI);
  window.open("mailto:" + (a + b + c));
}
function fixedEncodeURIComponent(a) {
  return encodeURIComponent(a).replace(/[!'()*]/g, function(a) {
    return "%" + a.charCodeAt(0).toString(16);
  });
}
sharePageToEmail();
