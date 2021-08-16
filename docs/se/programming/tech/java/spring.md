# Spring
## Spring Framework
- Features
  - Core
    - Ioc
    - AOP
    - events
    - resources
    - i18n
    - validation
    - data binding
    - type conversion
    - SpEL
  - Testing
    - mock objects
    - testContext Framework
    - spring MVC Test
    - WebTestClient

###  Instantiating a Container
#### configuration metadata
```xml title="xml-based-configuration.xml"
<beans>
  <!--bean definitions-->
</beans>
```
```xml title="annotation-based-configuration.xml"
<beans>
  <context:annotation-config/>
</beans>
```
#### Instantiating
```java
public class Example{
  public static void main(String[] args){
    //Instantiating a container use xml metadata
    ApplicationContext context = new ClassPathXmlApplicationContext("xml-based-configuration.xml");
    //or Instantiating a container use annotation metadata
    ApplicationContext context = new ClassPathXmlApplicationContext("annotation-based-configuration.xml");
    //or Instantiating a container based on java configuration
    ApplicationContext context = new AnnotationConfigApplicationContext();
    context.scan("org.example");
    context.refresh();
  }
}
```

### annotation vs xml
#### Define
```java title="Service.java"
public interface Service{
  findById(Long id);
}

```
```java title="MyServiceImpl.java"
public class MyServiceImpl implements Service{
  //use @Autowired on field
  @Autowired
  private Dao dao;

  //or use @Autowired on constructor
  @Autowired
  public ServiceImpl(Dao dao){
    this.dao=dao;
  }

  //or use @Autowired on setter
  @Autowired
  public void setDao(Dao dao){
    this.dao=dao;
  }

  //or use @Required on setter
  @Required
  public void setDao(Dao dao){
    this.dao=dao;
  }

  findById(Long id){

  }
}

```
```java title="TheirServiceImpl.java"
public class TheirServiceImpl implements Service{
  //use @Autowired on field
  @Autowired
  private Dao dao;

  findById(Long id){

  }
}

```
#### Configuration
```xml
<beans>
  <!--enable Component-scan-->
  <context:component-scan base-package="org.example"/>
  <!--define the bean of Dao-->
  <bean class="org.example.Dao">
  </bean>
  <!--define Primary bean of Service-->
  <bean class="org.example.MyService" primary="true">
  </bean>
  <!--define Scondary bean of Service-->
  <bean class="org.example.TheirService">
  </bean>
</beans>
```
```java
@Configuration
//enable Component-scan
@ComponentScan(basePackages = "org.example") 
public class Configuration{
  //define the bean of Dao
  @Bean
  public Dao dao(){
    return new Dao();
  }

  //define Primary bean of Service
  @Bean
  @Primary
  public Service myService(){
    return new MyService(dao());
  }

  //define Scondary bean of Service
  @Bean
  public Service Service(){
    return new TheirService();
  }
  
}
```