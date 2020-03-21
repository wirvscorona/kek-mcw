package de.wirvsvirus.kek.service;

import com.google.common.collect.Lists;
import de.wirvsvirus.kek.service.locations.model.LocationMatch;
import de.wirvsvirus.kek.service.locations.repository.LocationHistory;
import de.wirvsvirus.kek.service.locations.repository.LocationHistoryRepository;
import de.wirvsvirus.kek.service.locations.service.TrivialLocationMappingService;
import feign.Response;
import feign.codec.ErrorDecoder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import org.springframework.beans.factory.annotation.Autowired;
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

import de.wirvsvirus.kek.service.diary.model.Diary;
import de.wirvsvirus.kek.service.diary.model.Symptom;
import de.wirvsvirus.kek.service.diary.model.User;
import de.wirvsvirus.kek.service.diary.repository.DiaryRepository;
import de.wirvsvirus.kek.service.diary.repository.SymptomRepository;
import de.wirvsvirus.kek.service.diary.repository.UserRepository;

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
	public CommandLineRunner demo(LocationHistoryRepository repository, TrivialLocationMappingService service) {
		return (args -> {
			repository.save(new LocationHistory(490147397, 83940415, 1, 2, -1));

			logger.info("Stored one new location history....");

			for (LocationHistory queriedHistory : repository.findAllByLatitudeBetweenAndLongitudeBetween(-2, 0, -2, 0)) {
				logger.info(queriedHistory.toString());
			}

			for (LocationMatch match : service.computeNearbyMatches(Lists.newArrayList(new LocationHistory(490147397, 83940415, 0, 10, -1)), 100)) {
				logger.info(match.toString());
			}
		});
	}

	@Bean
	public CommandLineRunner demoUser(UserRepository repository) {
		return (args -> {
			User user = new User();
			user.setFirstName("peter");
			user.setLastName("lustig");
			repository.save(user);
		});
	}

	@Bean
	public CommandLineRunner demoSymptom(SymptomRepository repository) {
		return (args -> {
			Symptom symptom = new Symptom();
			symptom.setName("rote augen");
			symptom.setValue(1000);
			repository.save(symptom);
		});
	}
}
