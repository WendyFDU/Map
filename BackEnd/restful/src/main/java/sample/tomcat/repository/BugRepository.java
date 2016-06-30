package sample.tomcat.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sample.tomcat.domain.Bug;


@RepositoryRestResource
public interface BugRepository extends JpaRepository<Bug, Integer> {
}
