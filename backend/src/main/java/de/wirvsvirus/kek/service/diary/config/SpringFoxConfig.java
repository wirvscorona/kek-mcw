package de.wirvsvirus.kek.service.diary.config;

import com.google.common.base.Predicates;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@ConfigurationProperties
@EnableSwagger2
public class SpringFoxConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select()
          .apis(Predicates.not(RequestHandlerSelectors.basePackage("org.springframework.boot")))
          .paths(PathSelectors.any())                          
          .build();                                           
    }
}