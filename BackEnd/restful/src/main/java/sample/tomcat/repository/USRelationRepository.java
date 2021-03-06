package sample.tomcat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sample.tomcat.domain.USRelation;

import java.util.List;

@RepositoryRestResource
public  interface USRelationRepository extends JpaRepository<USRelation, Integer> {

    USRelation findBySceneIdAndUserId(int sceneid, int userid);
    List<USRelation> findByUserId(int userid);
}
