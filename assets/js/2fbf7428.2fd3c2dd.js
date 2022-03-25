"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[8880],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),s=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=s(n.components);return a.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(g,o(o({ref:e},u),{},{components:t})):a.createElement(g,o({ref:e},u))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1568:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={},c="Spring",s={unversionedId:"se/prog/tech/java/spring",id:"se/prog/tech/java/spring",title:"Spring",description:"Spring Framework",source:"@site/docs/se/prog/tech/java/spring.md",sourceDirName:"se/prog/tech/java",slug:"/se/prog/tech/java/spring",permalink:"/docs/se/prog/tech/java/spring",tags:[],version:"current",frontMatter:{},sidebar:"se_programming",previous:{title:"spring-security",permalink:"/docs/se/prog/tech/java/spring-security"},next:{title:"JavaScript",permalink:"/docs/se/prog/tech/java_script/language"}},u={},p=[{value:"Spring Framework",id:"spring-framework",level:2},{value:"ApplicationContext",id:"applicationcontext",level:2},{value:"annotation",id:"annotation",level:2},{value:"Container Extension Points",id:"container-extension-points",level:2},{value:"Instantiating a Container",id:"instantiating-a-container",level:3},{value:"configuration metadata",id:"configuration-metadata",level:4},{value:"Instantiating",id:"instantiating",level:4},{value:"annotation vs xml",id:"annotation-vs-xml",level:3},{value:"Define",id:"define",level:4},{value:"Configuration",id:"configuration",level:4}],d={toc:p};function m(n){var e=n.components,l=(0,r.Z)(n,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spring"},"Spring"),(0,i.kt)("h2",{id:"spring-framework"},"Spring Framework"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Features",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Core",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ioc"),(0,i.kt)("li",{parentName:"ul"},"AOP"),(0,i.kt)("li",{parentName:"ul"},"events"),(0,i.kt)("li",{parentName:"ul"},"resources"),(0,i.kt)("li",{parentName:"ul"},"i18n"),(0,i.kt)("li",{parentName:"ul"},"validation"),(0,i.kt)("li",{parentName:"ul"},"data binding"),(0,i.kt)("li",{parentName:"ul"},"type conversion"),(0,i.kt)("li",{parentName:"ul"},"SpEL"))),(0,i.kt)("li",{parentName:"ul"},"Testing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mock objects"),(0,i.kt)("li",{parentName:"ul"},"testContext Framework"),(0,i.kt)("li",{parentName:"ul"},"spring MVC Test"),(0,i.kt)("li",{parentName:"ul"},"WebTestClient")))))),(0,i.kt)("h2",{id:"applicationcontext"},"ApplicationContext"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Arch",src:t(1248).Z,width:"903",height:"606"})),(0,i.kt)("h2",{id:"annotation"},"annotation"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"java std"),(0,i.kt)("td",null,"spring"),(0,i.kt)("td",null,"see"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"javax.inject.Inject;",(0,i.kt)("br",null),"javax.inject.Provider;"),(0,i.kt)("td",null,"org.springframework.beans.factory.annotation.Autowired;")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"javax.inject.Inject;",(0,i.kt)("br",null),"javax.inject.Name;"),(0,i.kt)("td",null,"org.springframework.beans.factory.annotation.Autowired;",(0,i.kt)("br",null),"org.springframework.beans.factory.annotation.Qualifier")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"javax.annotation.Resource;"),(0,i.kt)("td",null,"org.springframework.beans.factory.annotation.Autowired;",(0,i.kt)("br",null),"org.springframework.beans.factory.annotation.Qualifier"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://docs.oracle.com/javase/tutorial/jndi/overview/index.html"},"JNDI"))))),(0,i.kt)("h2",{id:"container-extension-points"},"Container Extension Points"),(0,i.kt)("p",null,"BeanFactoryPostProcessor\nPropertySourcesPlaceholderConfigurer\nPropertyOverrideConfigurer\nBeanPostProcessor"),(0,i.kt)("h3",{id:"instantiating-a-container"},"Instantiating a Container"),(0,i.kt)("h4",{id:"configuration-metadata"},"configuration metadata"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="xml-based-configuration.xml"',title:'"xml-based-configuration.xml"'},"<beans>\n  \x3c!--bean definitions--\x3e\n</beans>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="annotation-based-configuration.xml"',title:'"annotation-based-configuration.xml"'},"<beans>\n  <context:annotation-config/>\n</beans>\n")),(0,i.kt)("h4",{id:"instantiating"},"Instantiating"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Example{\n  public static void main(String[] args){\n    //Instantiating a container use xml metadata\n    ApplicationContext context = new ClassPathXmlApplicationContext("xml-based-configuration.xml");\n    //or Instantiating a container use annotation metadata\n    ApplicationContext context = new ClassPathXmlApplicationContext("annotation-based-configuration.xml");\n    //or Instantiating a container based on java configuration\n    ApplicationContext context = new AnnotationConfigApplicationContext();\n    context.scan("org.example");\n    context.refresh();\n  }\n}\n')),(0,i.kt)("h3",{id:"annotation-vs-xml"},"annotation vs xml"),(0,i.kt)("h4",{id:"define"},"Define"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Service.java"',title:'"Service.java"'},"public interface Service{\n  findById(Long id);\n}\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MyServiceImpl.java"',title:'"MyServiceImpl.java"'},"public class MyServiceImpl implements Service{\n  //use @Autowired on field\n  @Autowired\n  private Dao dao;\n\n  //or use @Autowired on constructor\n  @Autowired\n  public ServiceImpl(Dao dao){\n    this.dao=dao;\n  }\n\n  //or use @Autowired on setter\n  @Autowired\n  public void setDao(Dao dao){\n    this.dao=dao;\n  }\n\n  //or use @Required on setter\n  @Required\n  public void setDao(Dao dao){\n    this.dao=dao;\n  }\n\n  findById(Long id){\n\n  }\n}\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TheirServiceImpl.java"',title:'"TheirServiceImpl.java"'},"public class TheirServiceImpl implements Service{\n  //use @Autowired on field\n  @Autowired\n  private Dao dao;\n\n  findById(Long id){\n\n  }\n}\n\n")),(0,i.kt)("h4",{id:"configuration"},"Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<beans>\n  \x3c!--enable Component-scan--\x3e\n  <context:component-scan base-package="org.example"/>\n  \x3c!--define the bean of Dao--\x3e\n  <bean class="org.example.Dao">\n  </bean>\n  \x3c!--define Primary bean of Service--\x3e\n  <bean class="org.example.MyService" primary="true">\n  </bean>\n  \x3c!--define Scondary bean of Service--\x3e\n  <bean class="org.example.TheirService">\n  </bean>\n</beans>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n//enable Component-scan\n@ComponentScan(basePackages = "org.example") \npublic class Configuration{\n  //define the bean of Dao\n  @Bean\n  public Dao dao(){\n    return new Dao();\n  }\n\n  //define Primary bean of Service\n  @Bean\n  @Primary\n  public Service myService(){\n    return new MyService(dao());\n  }\n\n  //define Scondary bean of Service\n  @Bean\n  public Service Service(){\n    return new TheirService();\n  }\n  \n}\n')))}m.isMDXComponent=!0},1248:function(n,e,t){e.Z=t.p+"assets/images/java-spring-applicationcontext-0798890acd4435c5a1a5b2b90f4e3374.png"}}]);