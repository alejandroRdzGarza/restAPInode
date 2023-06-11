INSERT INTO [dbo].[ejercicio]
    (
        [nombre]
        ,[descripcion]
        ,[calorias]
        ,[musculo]
    )
VALUES (
    @nombre
    ,@descripcion
    ,@calorias
    ,@musculo
)

SELECT SCOPE_IDENTITY() AS IDejercicio

