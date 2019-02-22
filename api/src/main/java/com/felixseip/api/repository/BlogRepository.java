package com.felixseip.api.repository;

import com.felixseip.api.model.Blog;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BlogRepository extends CrudRepository<Blog, Long> {
    @Query("SELECT b FROM Blog b")
    List<Blog> getAllBlogs();

    @Query("SELECT b FROM Blog b WHERE b.id = :blogId")
    Blog findById(long blogId);

    @Query("SELECT b.title FROM Blog b")
    List<Blog> getAllBlogTitles();

    @Query("SELECT b FROM Blog b WHERE b.publishingDate > :startDate AND b.publishingDate < :endDate")
    List<Blog> filterByDate(Date startDate, Date endDate);

    @Query("SELECT b FROM Blog b WHERE b.published = :status")
    List<Blog> filterByPublishedStatus(boolean status);

    List<Blog> findByTitle(String title);
}
