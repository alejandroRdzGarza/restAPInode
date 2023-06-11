INSERT INTO [dbo].[categoria]
    (
        [nombre]
    )
VALUES (
    @nombre
)

SELECT SCOPE_IDENTITY() AS IDcategoria