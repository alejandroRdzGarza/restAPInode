UPDATE [dbo].[alimento]
SET [nombre] = @nombre
    ,[descripcion] = @descripcion
    ,[calorias] = @calorias
    ,[proteinas] = @proteinas
    ,[azucares] = @azucares
    ,[carbohidratos] = @carbohidratos
    ,[gramos] = @gramos
    ,[grasas] = @grasas
WHERE [IDalimento] = @IDalimento

SELECT [IDalimento]
        ,[nombre]
        ,[descripcion]
        ,[calorias]
        ,[proteinas]
        ,[azucares]
        ,[carbohidratos]
        ,[gramos]
        ,[grasas]
FROM [dbo].[alimento]
WHERE [IDalimento] = @IDalimento
