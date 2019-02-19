package com.felixseip.api.controller;

import com.felixseip.api.model.Blog;
import com.felixseip.api.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/blogs")
public class BlogController {

    @Autowired
    BlogRepository repository;

    @GetMapping("")
    public List<Blog> getBlogs() {
        return repository.getAllBlogs();
    }

    @GetMapping("/count")
    public int getBlogCount() {
        return repository.getAllBlogs().size();
    }

    @GetMapping("/{order}")
    public void getBlogsByDate(@PathVariable("order") final String order) {

    }

    @GetMapping("/status/{published}")
    public List<Blog> getBlogsByPublishingStatus(@PathVariable("published") final boolean published) {
        return repository.filterByPublishedStatus(published);
    }

    //Filter the blogs by a range of dates. If no end date is specified, then filter until now
    @GetMapping("/from/{from}/to/{to}")
    public List<Blog> filterBlogsByDate(@PathVariable("from") final Date from, @PathVariable("to") Date to) {
        //If no end date is specified, then use the current date
        if (to == null) {
            final Calendar cal = Calendar.getInstance();
            to = cal.getTime();
        }

        return repository.filterByDate(from, to);
    }

    @PostMapping("")
    public void createBlog(@RequestBody final Blog blog) {
        repository.save(blog);
    }

    @PutMapping("")
    public void updateBlog(@RequestBody final Blog blog) {
        repository.save(blog);
    }

    @DeleteMapping("/{blogID}")
    public void deleteBlog(@PathVariable("blogID") final long blogID) {
        repository.deleteById(blogID);
    }
}
