package controller;

import model.Blog;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/blogs")
public class BlogController {

    @GetMapping("")
    public String getBlogs(){
        return "Hello World!";
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
