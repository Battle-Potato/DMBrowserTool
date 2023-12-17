(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['rollHistory'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"roll\">\r\n    <p>\r\n        <span class=\"roll-input\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"input") || (depth0 != null ? lookupProperty(depth0,"input") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"input","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":21}}}) : helper)))
    + ":\r\n        </span>\r\n        <span class=\"roll-output\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"output") || (depth0 != null ? lookupProperty(depth0,"output") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"output","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":22}}}) : helper)))
    + "\r\n        </span>\r\n    </p>\r\n</div>";
},"useData":true});
})();