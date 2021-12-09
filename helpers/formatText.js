export function strUcFirst(a) {
    return (a+'').charAt(0).toUpperCase()+a?.substr(1);
} 

//Usefull for breadscrumbs, to unslugify url'tab
export function unSlugify(slug) {    
    return strUcFirst(slug.replace('-', ' '));
}

//show first letter uppercase + "." of a lastname
export function showFirstLetter(name) {
    return name.charAt(0).toUpperCase() + ".";
}