var namespaces = {
    svg: 'http://www.w3.org/2000/svg',
    xmlns: 'http://www.w3.org/2000/xmlns',
    xlink: 'http://www.w3.org/1999/xlink',
    xhtml: 'http://www.w3.org/1999/xhtml'
}

var detectNamespace = function (attr) {
    var index = attr.indexOf(':');
    return attr.slice(0, index === -1 ? 0 : index);
}

var setAttributes = function (el, attributes) {
    for (var attr in attributes) {
        if(attributes.hasOwnProperty(attr)) {
            var namespace = namespaces[detectNamespace(attr)];
            if (namespace) {
                el.setAttributeNS(namespace, attr, attributes[attr]);
            } else {
                el.setAttribute(attr, attributes[attr]);
            }
        }
    }
}

var appendChildren = function (el, args, fromIndex) {
    Array.prototype.slice.call(args, fromIndex)
    .forEach(function (childElement) {
        el.appendChild(childElement);
    })
}

var el = function (elName, attributes) {
    var el = document.createElementNS(namespaces.svg, elName);
    setAttributes(el, attributes);
    appendChildren(el, arguments, 2);
    return el;
}

module.exports.el = el;