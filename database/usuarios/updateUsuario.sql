UPDATE [dbo].[usuario]
SET [nombre] = @nombre
    ,[edad] = @edad
    ,[telefono] = @telefono
    ,[mail] = @mail
    ,[fecha] = @fecha
WHERE [IDusuario] = @IDusuario

SELECT [IDusuario]
        ,[nombre]
        ,[edad]
        ,[telefono]
        ,[mail]
        ,[fecha]
FROM [dbo].[usuario]
WHERE [IDusuario] = @IDusuario
