package ar.com.projectFinal;



import com.fasterxml.jackson.databind.ObjectMapper;



import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/peliculas/*")


public class ServletPelicula  extends HttpServlet 
{

    private ServicePelicula peliculaService;
    private ObjectMapper objectMapper;    

    @Override
    public void init() throws ServletException 
    {
        peliculaService = new ServicePelicula();
        objectMapper = new ObjectMapper();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException 
    {
        String pathInfo = req.getPathInfo();
        try {
            if (pathInfo == null || pathInfo.equals("/")) 
            {
                List<Peliculas> peliculas = peliculaService.getAllPeliculas();
                String json = objectMapper.writeValueAsString(peliculas);
                resp.setContentType("application/json");
                resp.getWriter().write(json);
            } 
            else 
            {
                String[] pathParts = pathInfo.split("/");
                int id = Integer.parseInt(pathParts[1]);
                Peliculas pelicula = peliculaService.getPeliculaById(id);
                if (pelicula != null) 
                {
                    String json = objectMapper.writeValueAsString(pelicula);
                    resp.setContentType("application/json");
                    resp.getWriter().write(json);
                } 
                else 
                {
                    resp.sendError(HttpServletResponse.SC_NOT_FOUND);
                }
            }
        } 
        catch (SQLException | ClassNotFoundException error) 
        {
            throw new ServletException(error);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException , ServletException
    {
        try 
        {
            Peliculas pelicula = objectMapper.readValue(req.getReader(), Peliculas.class);
            peliculaService.addPelicula(pelicula);
            resp.setStatus(HttpServletResponse.SC_CREATED);
        } 
        catch (SQLException | ClassNotFoundException error) 
        {
            throw new ServletException(error);
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws IOException , ServletException
    {
        try 
        {
            Peliculas pelicula = objectMapper.readValue(req.getReader(), Peliculas.class);
            peliculaService.updatePelicula(pelicula);
            resp.setStatus(HttpServletResponse.SC_NO_CONTENT);
        } 
        catch (SQLException | ClassNotFoundException error) 
        {
            throw new ServletException(error);
        }
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException , ServletException
    {
        String pathInfo = req.getPathInfo();
        try {
            	if (pathInfo != null && pathInfo.split("/").length > 1) 
            	{
	                int id = Integer.parseInt(pathInfo.split("/")[1]);
	                peliculaService.deletePelicula(id);
	                resp.setStatus(HttpServletResponse.SC_NO_CONTENT);
            	} 
            	else 
            	{
            		resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
            	}
        	} 
        	catch (SQLException | ClassNotFoundException error) 
        	{
        			throw new ServletException(error);
        	}
    }
 

}
