Nome: /^[^\d]{1,100}$/
Essa expressão só permite caracteres, exceto números. Com 1 a 100 caracteres.

^: Indica o início da string.
[^\d]: Representa uma classe de caracteres negada ([^]), que significa "qualquer caractere que não seja". Dentro dos colchetes, \d corresponde a qualquer caractere numérico. Portanto, [^\d] corresponde a qualquer caractere que não seja numérico.
{1,100}: Indica que o caractere anterior (ou seja, [^\d]) pode aparecer de 1 a 100 vezes.
$: Indica o fim da string


Email: /^[^\s@]+@[^\s@]+.[^\s@]+$/
Essa expressão regular verifica se o email possui o formato padrão, com um caractere não espaço seguido de '@', seguido de outro caractere não espaço, seguido de '.', e terminando com mais um caractere não espaço.
[^\s@]+: Representa um ou mais caracteres que não sejam espaços em branco (\s) ou o caractere @. Isso garante que o nome de usuário do e-mail contenha pelo menos um caractere e não inclua espaços em branco ou o caractere @.
@: Representa o caractere @, que separa o nome de usuário do domínio no endereço de e-mail.
[^\s@]+: Representa um ou mais caracteres que não sejam espaços em branco (\s) ou o caractere @. Isso garante que o domínio do e-mail contenha pelo menos um caractere e não inclua espaços em branco ou o caractere @.
\.: Representa o caractere ponto (.), que separa o nome do domínio de nível superior (TLD) no endereço de e-mail. O caractere \ é usado para escapar o ponto, pois o ponto tem um significado especial em expressões regulares e precisamos tratá-lo literalmente.
[^\s@]+: Representa um ou mais caracteres que não sejam espaços em branco (\s) ou o caractere @. Isso garante que o TLD do e-mail contenha pelo menos um caractere e não inclua espaços em branco ou o caractere @.


Telefone: /^[5-5]{2} [0-9]{2} [0-9]{4,5}-[0-9]{4}$/
Essa expressão regular verifica se o número de telefone está no formato padrão brasileiro, começando com o DDD '55', seguido por um espaço, seguido por 2 dígitos, outro espaço, seguido de 4 ou 5 dígitos, um traço '-' e finalizando com mais 4 dígitos.

[5-5]{2}: Significa que os dois primeiros caracteres devem ser 5.
: Representa um espaço em branco.
[0-9]{2}: Significa que os dois próximos caracteres devem ser dígitos de 0 a 9, representando o DDD.
: Representa um espaço em branco.
[0-9]{4,5}: Significa que os próximos 4 ou 5 caracteres devem ser dígitos de 0 a 9, representando a primeira parte do número de telefone.
-: Representa o caractere hífen -.
[0-9]{4}: Significa que os últimos 4 caracteres devem ser dígitos de 0 a 9, representando a segunda parte do número de telefone.

1-inserir o nome, só com máximo 100 caracteres
2-email, colocar só xxxxxxx@gmail.com
3-numero telefone +55(DD)xxxxx xxxx
4-aparece o alert caso falte algo no cadastro;
