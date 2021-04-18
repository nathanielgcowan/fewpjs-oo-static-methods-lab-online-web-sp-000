class Formatter {
  //add static methods here
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  static sanitize(name) {
    return name.replace(/[^-,'A-Za-z0-9 ]+/g, '');
  }
  static titleize(name) {
    let except = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let newString = [];
    let splitStr = name.toLowerCase().split(' ');
  
    for ( let i = 0; i < splitStr.length; i++ ) {
      if ( i == 0 ) {
        newString.push( this.capitalize( splitStr[ n ] ) )
      } else {
        if ( except.includes( splitStr[ n ] ) ) {
          newString.push( splitStr[ n ] )
        } else {
          result.push( this.capitalize( splitStr[ n ] ) )
        }
      }

    }
    
    return newString.join( " " );
  }
}
