package sample.tomcat;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import sample.tomcat.cors.CORSFilter;


@Configuration
public class SecurityConfiguration {


	@Bean
	public CORSFilter corsFilter() {
		return new CORSFilter();
	}
}

