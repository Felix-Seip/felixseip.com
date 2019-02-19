package com.felixseip.api.repository;

import com.felixseip.api.model.Blog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends CrudRepository<Blog, Long> {
    List<Blog> findByTitle(String title);
}
