(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[2851],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(f,i(i({ref:n},l),{},{components:r})):t.createElement(f,i({ref:n},l))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6610:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var t=r(2122),a=r(9756),o=(r(7294),r(3905)),i={},p="Maven",c={unversionedId:"se/programming/tech/java/maven",id:"se/programming/tech/java/maven",isDocsHomePage:!1,title:"Maven",description:"Maven can provide benefits for your build process by employing standard conventions and practices to accelerate your development cycle while at the same time helping you achieve a higher rate of success.",source:"@site/docs/se/programming/tech/java/maven.md",sourceDirName:"se/programming/tech/java",slug:"/se/programming/tech/java/maven",permalink:"/docs/se/programming/tech/java/maven",version:"current",frontMatter:{},sidebar:"se_programming",previous:{title:"Java Programming Language",permalink:"/docs/se/programming/tech/java/language"},next:{title:"Hibernate",permalink:"/docs/se/programming/tech/java/orm-hibernate"}},s=[{value:"configure",id:"configure",children:[{value:"project coordinate",id:"project-coordinate",children:[]},{value:"use plugins",id:"use-plugins",children:[]},{value:"add resources to my jar",id:"add-resources-to-my-jar",children:[]},{value:"filter resource files",id:"filter-resource-files",children:[]},{value:"use external dependencies",id:"use-external-dependencies",children:[]},{value:"Dependency Management",id:"dependency-management",children:[]}]}],l={toc:s};function d(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"maven"},"Maven"),(0,o.kt)("p",null,"Maven can provide benefits for your build process by employing standard conventions and practices to accelerate your development cycle while at the same time helping you achieve a higher rate of success."),(0,o.kt)("p",null,"Maven\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u6807\u51c6\u7ea6\u5b9a\u548c\u5b9e\u8df5\u6765\u52a0\u901f\u5f00\u53d1\u5468\u671f\uff0c\u540c\u65f6\u5e2e\u52a9\u60a8\u83b7\u5f97\u66f4\u9ad8\u7684\u6210\u529f\u7387\uff0c\u4ece\u800c\u4e3a\u60a8\u7684\u6784\u5efa\u8fc7\u7a0b\u63d0\u4f9b\u597d\u5904\u3002"),(0,o.kt)("h2",{id:"configure"},"configure"),(0,o.kt)("h3",{id:"project-coordinate"},"project coordinate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--\x3epom.xml<--\x3e\n<project>\n  <groupId>org.test</groupId>\n  <artifactId>example</artifactId>\n  \x3c!--version>1.0-SNAPSHOT</version--\x3e\x3c!--\x3elatest<--\x3e\n  <version>1.0</version>\x3c!--\x3erelease<--\x3e\n  <name>Example</name>\n</project>\n")),(0,o.kt)("h3",{id:"use-plugins"},"use plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n  <plugins>\n    <plugin>\n      \x3c!--\x3ePlugin coordinate<--\x3e\n      \x3c!--\x3econfiguration<--\x3e\n    </plugin>\n  </plugins>\n</build>\n")),(0,o.kt)("h3",{id:"add-resources-to-my-jar"},"add resources to my jar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${basedir}\n`-src\n  |-main\n  | `-resources\n  |   `-your resources file here\n  |-test\n    `-resources\n      `-your test resource file here\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--\x3epom.xml<--\x3e\n\x3c!--\x3ethis configuration is default in maven<--\x3e\n<build>\n  <resources>\n    <resource>\n      <directory>src/main/resources</directory>\n      <filtering>false</filtering>\n    </resource>\n  </resources>\n</build>\n")),(0,o.kt)("h3",{id:"filter-resource-files"},"filter resource files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${basedir}\n`-src\n  `-main\n    `-resources\n      |-application.properties\n      | `-application.name=${project.name}\n      | `-java.version=${java.version}\n      | `-command.line.prop=${command.line.prop}\n      | `-conf.prop=${conf.prop}\n      | `-ref.prop=${ref.prop}\n      `-filter.properties\n        `-ref.prop=refprop\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n  <filters>\n    <filter>src/main/resources/filter.properties</filter>\n  </filters>\n  <resources>\n    <resource>\n      <directory>src/main/resources</directory>\n      <filtering>true</filtering>\n    </resource>\n  </resources>\n</build>\n<properties>\n  <conf.prop>confprop</conf.prop>\n</properties>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mvn process-resources "-Dcommand.line.prop=hello again"\n\n# target/classes/application.properties\napplication.name=Example\njava.version=1.8\ncommand.line.prop=hello again\nconf.prop=confprop\nref.prop=refprop\n')),(0,o.kt)("h3",{id:"use-external-dependencies"},"use external dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  <dependency>\n    <groupId>junit</groupId>\n    <artifactId>junit</artifactId>\n    <version>4.11</version>\n    \x3c!--scope>compile</scope--\x3e\n    \x3c!--scope>provided</scope--\x3e\n    \x3c!--scope>runtime</scope--\x3e\n    \x3c!--scope>test</scope--\x3e\n    \x3c!--scope>system</scope--\x3e\n    \x3c!--scope>import</scope--\x3e\n  </dependency>\n</dependencies>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"scope",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"compile",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is the default scope, those dependencies are propagated to dependent projects"))),(0,o.kt)("li",{parentName:"ul"},"provided",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the target runtime already provides those dependence ,those dependencies are not propagated to dependent projects"))),(0,o.kt)("li",{parentName:"ul"},"runtime",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Maven includes a dependency with this scope in the runtime and test classpaths, but not the compile classpath."))),(0,o.kt)("li",{parentName:"ul"},"test",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This scope indicates that the dependency is not required for normal use of the application, and is only available for the test compilation and execution phases."))),(0,o.kt)("li",{parentName:"ul"},"system",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The artifact is always available and is not looked up in a repository."))),(0,o.kt)("li",{parentName:"ul"},"import",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This scope is only supported on a dependency of type ",(0,o.kt)("inlineCode",{parentName:"li"},"pom")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"<dependencyManagement>")," section.")))))),(0,o.kt)("h3",{id:"dependency-management"},"Dependency Management"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section is a mechanism for ",(0,o.kt)("strong",{parentName:"p"},"centralizing dependency information"),". When you have a set of projects that ",(0,o.kt)("strong",{parentName:"p"},"inherit from a common parent"),", it's possible to put all information about the dependency in the common POM and have simpler references to the artifacts in the child POMs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--parent pom--\x3e\n<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>group-a</groupId>\n      <artifactId>artifact-a</artifactId>\n      <version>1.0</version>\n\n      <exclusions>\n        <exclusion>\n          <groupId>group-c</groupId>\n          <artifactId>excluded-artifact</artifactId>\n        </exclusion>\n      </exclusions>\n\n    </dependency>\n\n    <dependency>\n      <groupId>group-c</groupId>\n      <artifactId>artifact-b</artifactId>\n      <version>1.0</version>\n      <type>war</type>\n      <scope>runtime</scope>\n    </dependency>\n\n    <dependency>\n      <groupId>group-a</groupId>\n      <artifactId>artifact-b</artifactId>\n      <version>1.0</version>\n      <type>bar</type>\n      <scope>runtime</scope>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--A pom inhert parent pom--\x3e\n<dependencies>\n  <dependency>\n    <groupId>group-a</groupId>\n    <artifactId>artifact-a</artifactId>\n  </dependency>\n\n  <dependency>\n    <groupId>group-a</groupId>\n    <artifactId>artifact-b</artifactId>\n    \x3c!-- This is not a jar dependency, so we must specify type. --\x3e\n    <type>bar</type>\n  </dependency>\n</dependencies>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--B pom inhert parent pom--\x3e\n<dependencies>\n  <dependency>\n    <groupId>group-c</groupId>\n    <artifactId>artifact-b</artifactId>\n    \x3c!-- This is not a jar dependency, so we must specify type. --\x3e\n    <type>war</type>\n  </dependency>\n\n  <dependency>\n    <groupId>group-a</groupId>\n    <artifactId>artifact-b</artifactId>\n    \x3c!-- This is not a jar dependency, so we must specify type. --\x3e\n    <type>bar</type>\n  </dependency>\n</dependencies>\n")))}d.isMDXComponent=!0}}]);