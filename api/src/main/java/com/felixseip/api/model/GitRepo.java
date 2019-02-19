package com.felixseip.api.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class GitRepo implements Serializable {

    private static final long serialVersionUID = -3124814972945690266L;

    private final String name;
    private final String description;
    private final String projectURL;

    public GitRepo(final String name, final String description, final String projectURL) {
        this.name = name;
        this.description = description;
        this.projectURL = projectURL;
    }
}
