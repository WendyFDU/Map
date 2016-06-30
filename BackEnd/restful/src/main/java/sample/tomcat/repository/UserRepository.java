package sample.tomcat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sample.tomcat.domain.User;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUserNameAndUserPassword(String name, String password);

}
