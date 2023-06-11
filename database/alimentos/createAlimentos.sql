INSERT INTO [dbo].[alimento]
    (
        [nombre]
        ,[descripcion]
        ,[calorias]
        ,[proteinas]
        ,[azucares]
        ,[carbohidratos]
        ,[gramos]
        ,[grasas]
    )
VALUES (
    @nombre
    ,@descripcion
    ,@calorias
    ,@proteinas
    ,@azucares
    ,@carbohidratos
    ,@gramos
    ,@grasas
)

SELECT SCOPE_IDENTITY() AS IDalimento