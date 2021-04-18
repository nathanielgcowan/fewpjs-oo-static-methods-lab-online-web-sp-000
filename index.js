class Formatter {
  //add static methods here
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  static sanitize(name) {
    return name.replace(/[^-,'A-Za-z0-9 ]+/g, '');
  }
  static titleize(name) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by',  'from']

    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();

  }
}
