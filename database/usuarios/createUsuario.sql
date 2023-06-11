INSERT INTO [dbo].[usuario]
    (
        [nombre]
        ,[edad]
        ,[telefono]
        ,[mail]
        ,[fecha]
    )
VALUES (
    @nombre
    ,@edad
    ,@telefono
    ,@mail
    ,@fecha
)

SELECT SCOPE_IDENTITY() AS IDusuario