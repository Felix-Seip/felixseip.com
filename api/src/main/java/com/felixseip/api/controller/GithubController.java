package com.felixseip.api.controller;

import com.felixseip.api.model.GitRepo;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/repos")
public class GithubController {

    @GetMapping("/{user}")
    public List<GitRepo> getAllGitReposForUser(@PathVariable("user") final String userName) {
        final String gitURL = "https://api.github.com/users/" + userName + "/repos";
        System.out.println("Calling URL: " + gitURL);

        final RestTemplate restTemplate = new RestTemplate();
        final JsonParser jsonParser = new JsonParser();

        final JsonArray entries = (JsonArray) jsonParser.parse(restTemplate.getForObject(gitURL, String.class));

        final List<GitRepo> repos = new ArrayList<>();
        for (int i = 0; i < entries.size(); i++) {
            final String repoName = ((JsonObject) entries.get(i)).get("name").toString();
            final String repoDescription = ((JsonObject) entries.get(i)).get("description").toString();
            final String projectUrl = ((JsonObject) entries.get(i)).get("html_url").toString();
            repos.add(new GitRepo(repoName, repoDescription, projectUrl));
        }
        return repos;
    }
}