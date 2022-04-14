"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[4864],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,p(p({ref:n},l),{},{components:t})):r.createElement(f,p({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99068:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),p=["components"],i={},c="Maven",s={unversionedId:"se/prog/tech/java/maven",id:"se/prog/tech/java/maven",title:"Maven",description:"Maven can provide benefits for your build process by employing standard conventions and practices to accelerate your development cycle while at the same time helping you achieve a higher rate of success.",source:"@site/docs/se/prog/tech/java/maven.md",sourceDirName:"se/prog/tech/java",slug:"/se/prog/tech/java/maven",permalink:"/zh/docs/se/prog/tech/java/maven",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"configure",id:"configure",level:2},{value:"project coordinate",id:"project-coordinate",level:3},{value:"use plugins",id:"use-plugins",level:3},{value:"add resources to my jar",id:"add-resources-to-my-jar",level:3},{value:"filter resource files",id:"filter-resource-files",level:3},{value:"use external dependencies",id:"use-external-dependencies",level:3},{value:"Dependency Management",id:"dependency-management",level:3}],u={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"maven"},"Maven"),(0,o.kt)("p",null,"Maven can provide benefits for your build process by employing standard conventions and practices to accelerate your development cycle while at the same time helping you achieve a higher rate of success."),(0,o.kt)("p",null,"Maven\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u6807\u51c6\u7ea6\u5b9a\u548c\u5b9e\u8df5\u6765\u52a0\u901f\u5f00\u53d1\u5468\u671f\uff0c\u540c\u65f6\u5e2e\u52a9\u60a8\u83b7\u5f97\u66f4\u9ad8\u7684\u6210\u529f\u7387\uff0c\u4ece\u800c\u4e3a\u60a8\u7684\u6784\u5efa\u8fc7\u7a0b\u63d0\u4f9b\u597d\u5904\u3002"),(0,o.kt)("h2",{id:"configure"},"configure"),(0,o.kt)("h3",{id:"project-coordinate"},"project coordinate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--\x3epom.xml<--\x3e\n<project>\n  <groupId>org.test</groupId>\n  <artifactId>example</artifactId>\n  \x3c!--version>1.0-SNAPSHOT</version--\x3e\x3c!--\x3elatest<--\x3e\n  <version>1.0</version>\x3c!--\x3erelease<--\x3e\n  <name>Example</name>\n</project>\n")),(0,o.kt)("h3",{id:"use-plugins"},"use plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n  <plugins>\n    <plugin>\n      \x3c!--\x3ePlugin coordinate<--\x3e\n      \x3c!--\x3econfiguration<--\x3e\n    </plugin>\n  </plugins>\n</build>\n")),(0,o.kt)("h3",{id:"add-resources-to-my-jar"},"add resources to my jar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${basedir}\n`-src\n  |-main\n  | `-resources\n  |   `-your resources file here\n  |-test\n    `-resources\n      `-your test resource file here\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--\x3epom.xml<--\x3e\n\x3c!--\x3ethis configuration is default in maven<--\x3e\n<build>\n  <resources>\n    <resource>\n      <directory>src/main/resources</directory>\n      <filtering>false</filtering>\n    </resource>\n  </resources>\n</build>\n")),(0,o.kt)("h3",{id:"filter-resource-files"},"filter resource files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${basedir}\n`-src\n  `-main\n    `-resources\n      |-application.properties\n      | `-application.name=${project.name}\n      | `-java.version=${java.version}\n      | `-command.line.prop=${command.line.prop}\n      | `-conf.prop=${conf.prop}\n      | `-ref.prop=${ref.prop}\n      `-filter.properties\n        `-ref.prop=refprop\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n  <filters>\n    <filter>src/main/resources/filter.properties</filter>\n  </filters>\n  <resources>\n    <resource>\n      <directory>src/main/resources</directory>\n      <filtering>true</filtering>\n    </resource>\n  </resources>\n</build>\n<properties>\n  <conf.prop>confprop</conf.prop>\n</properties>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mvn process-resources "-Dcommand.line.prop=hello again"\n\n# target/classes/application.properties\napplication.name=Example\njava.version=1.8\ncommand.line.prop=hello again\nconf.prop=confprop\nref.prop=refprop\n')),(0,o.kt)("h3",{id:"use-external-dependencies"},"use external dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  <dependency>\n    <groupId>junit</groupId>\n    <artifactId>junit</artifactId>\n    <version>4.11</version>\n    \x3c!--scope>compile</scope--\x3e\n    \x3c!--scope>provided</scope--\x3e\n    \x3c!--scope>runtime</scope--\x3e\n    \x3c!--scope>test</scope--\x3e\n    \x3c!--scope>system</scope--\x3e\n    \x3c!--scope>import</scope--\x3e\n  </dependency>\n</dependencies>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"scope",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"compile",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is the default scope, those dependencies are propagated to dependent projects"))),(0,o.kt)("li",{parentName:"ul"},"provided",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the target runtime already provides those dependence ,those dependencies are not propagated to dependent projects"))),(0,o.kt)("li",{parentName:"ul"},"runtime",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Maven includes a dependency with this scope in the runtime and test classpaths, but not the compile classpath."))),(0,o.kt)("li",{parentName:"ul"},"test",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This scope indicates that the dependency is not required for normal use of the application, and is only available for the test compilation and execution phases."))),(0,o.kt)("li",{parentName:"ul"},"system",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The artifact is always available and is not looked up in a repository."))),(0,o.kt)("li",{parentName:"ul"},"import",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This scope is only supported on a dependency of type ",(0,o.kt)("inlineCode",{parentName:"li"},"pom")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"<dependencyManagement>")," section.")))))),(0,o.kt)("h3",{id:"dependency-management"},"Dependency Management"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section is a mechanism for ",(0,o.kt)("strong",{parentName:"p"},"centralizing dependency information"),". When you have a set of projects that ",(0,o.kt)("strong",{parentName:"p"},"inherit from a common parent"),", it's possible to put all information about the dependency in the common POM and have simpler references to the artifacts in the child POMs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--parent pom--\x3e\n<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>group-a</groupId>\n      <artifactId>artifact-a</artifactId>\n      <version>1.0</version>\n\n      <exclusions>\n        <exclusion>\n          <groupId>group-c</groupId>\n          <artifactId>excluded-artifact</artifactId>\n        </exclusion>\n      </exclusions>\n\n    </dependency>\n\n    <dependency>\n      <groupId>group-c</groupId>\n      <artifactId>artifact-b</artifactId>\n      <version>1.0</version>\n      <type>war</type>\n      <scope>runtime</scope>\n    </dependency>\n\n    <dependency>\n      <groupId>group-a</groupId>\n      <artifactId>artifact-b</artifactId>\n      <version>1.0</version>\n      <type>bar</type>\n      <scope>runtime</scope>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--A pom inhert parent pom--\x3e\n<dependencies>\n  <dependency>\n    <groupId>group-a</groupId>\n    <artifactId>artifact-a</artifactId>\n  </dependency>\n\n  <dependency>\n    <groupId>group-a</groupId>\n    <artifactId>artifact-b</artifactId>\n    \x3c!-- This is not a jar dependency, so we must specify type. --\x3e\n    <type>bar</type>\n  </dependency>\n</dependencies>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--B pom inhert parent pom--\x3e\n<dependencies>\n  <dependency>\n    <groupId>group-c</groupId>\n    <artifactId>artifact-b</artifactId>\n    \x3c!-- This is not a jar dependency, so we must specify type. --\x3e\n    <type>war</type>\n  </dependency>\n\n  <dependency>\n    <groupId>group-a</groupId>\n    <artifactId>artifact-b</artifactId>\n    \x3c!-- This is not a jar dependency, so we must specify type. --\x3e\n    <type>bar</type>\n  </dependency>\n</dependencies>\n")))}m.isMDXComponent=!0}}]);