# Maven
Maven can provide benefits for your build process by employing standard conventions and practices to accelerate your development cycle while at the same time helping you achieve a higher rate of success.

Maven可以通过使用标准约定和实践来加速开发周期，同时帮助您获得更高的成功率，从而为您的构建过程提供好处。

## configure
### project coordinate
```xml
<!-->pom.xml<-->
<project>
  <groupId>org.test</groupId>
  <artifactId>example</artifactId>
  <!--version>1.0-SNAPSHOT</version--><!-->latest<-->
  <version>1.0</version><!-->release<-->
  <name>Example</name>
</project>
```
### use plugins
```xml
<build>
  <plugins>
    <plugin>
      <!-->Plugin coordinate<-->
      <!-->configuration<-->
    </plugin>
  </plugins>
</build>
```
### add resources to my jar
```
${basedir}
`-src
  |-main
  | `-resources
  |   `-your resources file here
  |-test
    `-resources
      `-your test resource file here
```
```xml
<!-->pom.xml<-->
<!-->this configuration is default in maven<-->
<build>
  <resources>
    <resource>
      <directory>src/main/resources</directory>
      <filtering>false</filtering>
    </resource>
  </resources>
</build>
```
### filter resource files
```
${basedir}
`-src
  `-main
    `-resources
      |-application.properties
      | `-application.name=${project.name}
      | `-java.version=${java.version}
      | `-command.line.prop=${command.line.prop}
      | `-conf.prop=${conf.prop}
      | `-ref.prop=${ref.prop}
      `-filter.properties
        `-ref.prop=refprop
```
```xml
<build>
  <filters>
    <filter>src/main/resources/filter.properties</filter>
  </filters>
  <resources>
    <resource>
      <directory>src/main/resources</directory>
      <filtering>true</filtering>
    </resource>
  </resources>
</build>
<properties>
  <conf.prop>confprop</conf.prop>
</properties>
```
```
mvn process-resources "-Dcommand.line.prop=hello again"

# target/classes/application.properties
application.name=Example
java.version=1.8
command.line.prop=hello again
conf.prop=confprop
ref.prop=refprop
```
### use external dependencies
```xml
<dependencies>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.11</version>
    <!--scope>compile</scope-->
    <!--scope>provided</scope-->
    <!--scope>runtime</scope-->
    <!--scope>test</scope-->
    <!--scope>system</scope-->
    <!--scope>import</scope-->
  </dependency>
</dependencies>
```
- scope
  - compile
    - This is the default scope, those dependencies are propagated to dependent projects
  - provided
    - the target runtime already provides those dependence ,those dependencies are not propagated to dependent projects
  - runtime
    - Maven includes a dependency with this scope in the runtime and test classpaths, but not the compile classpath.
  - test
    - This scope indicates that the dependency is not required for normal use of the application, and is only available for the test compilation and execution phases.
  - system
    - The artifact is always available and is not looked up in a repository.
  - import
    - This scope is only supported on a dependency of type `pom` in the `<dependencyManagement>` section.
### Dependency Management
The `<dependencyManagement>` section is a mechanism for **centralizing dependency information**. When you have a set of projects that **inherit from a common parent**, it's possible to put all information about the dependency in the common POM and have simpler references to the artifacts in the child POMs.
```xml
<!--parent pom-->
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>group-a</groupId>
      <artifactId>artifact-a</artifactId>
      <version>1.0</version>

      <exclusions>
        <exclusion>
          <groupId>group-c</groupId>
          <artifactId>excluded-artifact</artifactId>
        </exclusion>
      </exclusions>

    </dependency>

    <dependency>
      <groupId>group-c</groupId>
      <artifactId>artifact-b</artifactId>
      <version>1.0</version>
      <type>war</type>
      <scope>runtime</scope>
    </dependency>

    <dependency>
      <groupId>group-a</groupId>
      <artifactId>artifact-b</artifactId>
      <version>1.0</version>
      <type>bar</type>
      <scope>runtime</scope>
    </dependency>
  </dependencies>
</dependencyManagement>
```
```xml
<!--A pom inhert parent pom-->
<dependencies>
  <dependency>
    <groupId>group-a</groupId>
    <artifactId>artifact-a</artifactId>
  </dependency>

  <dependency>
    <groupId>group-a</groupId>
    <artifactId>artifact-b</artifactId>
    <!-- This is not a jar dependency, so we must specify type. -->
    <type>bar</type>
  </dependency>
</dependencies>
```
```xml
<!--B pom inhert parent pom-->
<dependencies>
  <dependency>
    <groupId>group-c</groupId>
    <artifactId>artifact-b</artifactId>
    <!-- This is not a jar dependency, so we must specify type. -->
    <type>war</type>
  </dependency>

  <dependency>
    <groupId>group-a</groupId>
    <artifactId>artifact-b</artifactId>
    <!-- This is not a jar dependency, so we must specify type. -->
    <type>bar</type>
  </dependency>
</dependencies>
```