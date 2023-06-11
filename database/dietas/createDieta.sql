INSERT INTO [dbo].[dieta]
    (
        [IDcategoria]
        ,[IDalimento]
        ,[IDusuario]
        ,[fecha]
    )
VALUES (
    @IDcategoria
    ,@IDalimento
    ,@IDusuario
    ,@fecha
)

SELECT SCOPE_IDENTITY() AS IDdieta