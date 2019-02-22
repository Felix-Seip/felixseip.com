package com.felixseip.api.controller;

import com.felixseip.api.model.Blog;
import com.felixseip.api.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/blogs")
@CrossOrigin(origins = "*")
public class BlogController {

    @Autowired
    BlogRepository repository;

    @GetMapping("")
    public ResponseEntity<Object> getBlogs() {
        return ResponseEntity.ok(repository.getAllBlogs());
    }

    @GetMapping("/{blogId}")
    public ResponseEntity<Object> getBlog(@PathVariable("blogId") final long blogId) {
        return ResponseEntity.ok(repository.findById(blogId));
    }

    @GetMapping("/count")
    public int getBlogCount() {
        return repository.getAllBlogs().size();
    }

    @GetMapping("/status/{published}")
    public ResponseEntity<Object> getBlogsByPublishingStatus(@PathVariable("published") final boolean published) {
        return ResponseEntity.ok(repository.filterByPublishedStatus(published));
    }

    //Filter the blogs by a range of dates. If no end date is specified, then filter until now
    @GetMapping("/from/{from}/to/{to}")
    public ResponseEntity<Object> filterBlogsByDate(@PathVariable("from") final Date from, @PathVariable("to") Date to) {
        //If no end date is specified, then use the current date
        if (to == null) {
            final Calendar cal = Calendar.getInstance();
            to = cal.getTime();
        }

        List<Blog> blogs = repository.filterByDate(from, to);
        return ResponseEntity.ok(blogs);
    }

    @PostMapping("")
    public ResponseEntity<Object> createBlog(@RequestBody final Blog blog) {
        repository.save(blog);

        try {
            return ResponseEntity.created(new URI("http://localhost:8080/blogs/" + blog.getBlogId())).build();
        } catch (URISyntaxException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getLocalizedMessage());
        }
    }

    @PutMapping("")
    public void updateBlog(@RequestBody final Blog blog) {
        repository.deleteById(blog.getBlogId());
        repository.save(blog);
    }

    @DeleteMapping("/{blogID}")
    public ResponseEntity<Object> deleteBlog(@PathVariable("blogID") final long blogID) {
        if (repository.findById(blogID) == null) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(blogID);
        return ResponseEntity.ok().build();
    }
}
