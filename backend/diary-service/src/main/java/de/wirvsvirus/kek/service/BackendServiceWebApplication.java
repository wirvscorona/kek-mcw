package de.wirvsvirus.kek.service;

import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.LocationHistoryRepository;
import feign.Response;
import feign.codec.ErrorDecoder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;

@SpringBootApplication
@EnableSwagger2
@EnableZuulProxy
@EnableFeignClients(defaultConfiguration = BackendServiceWebApplication.FeignConfiguration.class)
public class BackendServiceWebApplication extends SpringBootServletInitializer {

	Logger logger = LoggerFactory.getLogger(BackendServiceWebApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BackendServiceWebApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(BackendServiceWebApplication.class);
	}

	@Configuration
	static class FeignConfiguration implements ErrorDecoder {

		@Override
		public Exception decode(String methodKey, Response response) {
			if (response.status() >= 500) {
				return new HttpServerErrorException(HttpStatus.valueOf(response.status()), response.reason());
			} else {
				return new HttpClientErrorException(HttpStatus.valueOf(response.status()), response.reason());
			}
		}
	}

	// FIXME: only for demo purposes, ensuring LocationRepository works as expected.
	@Bean
	public CommandLineRunner demo(LocationHistoryRepository repository) {
		return (args -> {
			repository.save(new LocationHistory(-1, -1, -1, -1, -1));

			logger.info("Stored one new location history....");

			for (LocationHistory queriedHistory : repository.findAll()) {
				logger.info(queriedHistory.toString());
			}
		});
	}
}
