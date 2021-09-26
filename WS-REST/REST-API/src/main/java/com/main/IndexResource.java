package com.main;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/")
public class IndexResource {
    @GET
    @Produces("text/plain")
    public String hello() {
        return "Success!";
    }
}