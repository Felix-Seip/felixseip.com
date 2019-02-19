package com.felixseip.api.controller;

import com.felixseip.api.model.Blog;
import com.felixseip.api.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogs")
public class BlogController {

    @Autowired
    BlogRepository repository;

    @GetMapping("")
    public List<Blog> getBlogs(){
        return repository.findByTitle("sdf");
    }

    @GetMapping("/count")
    public void getBlogCount() {

    }

    @GetMapping("/{order}")
    public void getBlogsByDate(@PathVariable("order") String order) {

    }

    @GetMapping("/from/{from}/to/{to}")
    public void getBlogs(@PathVariable("from") int from, @PathVariable("to") int to){

    }

    @PostMapping("")
    public void createBlog(@RequestBody Blog blog){

    }

    @PutMapping("")
    public void updateBlog(@RequestBody Blog blog) {

    }

    @DeleteMapping("/{blogID}")
    public void deleteBlog(@PathVariable("blogID") long blogID){

    }
}
