package com.main;

import com.model.SplitterResponseModel;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

@Path("/separar/{input}")
public class SeparadorDeNombres {
    @PathParam("input")
    private String input;

    @GET
    @Produces("application/json")
    public Response separar() {
        List<String> parsed_input = Arrays.asList(input.split(" "));

        if(parsed_input.size() < 3) {
            return Response.status(400).build();
        }

        Stack<String> pila_inputs = new Stack<>();

        pila_inputs.addAll(parsed_input);

        List<String> listaApellidos = new ArrayList<String>() {
            {
                add(pila_inputs.pop());
                add(pila_inputs.pop());
            }
        };

        List<String> listaNombres = new ArrayList<>(pila_inputs);

        SplitterResponseModel res = new SplitterResponseModel(listaNombres, listaApellidos);

        return Response.ok(res).build();
    }
}

