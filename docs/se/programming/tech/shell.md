# Shell
First of all, what's a shell? Under Unix, a shell is a command interpreter. That is, it reads commands from the keyboard and executes them.
[ref](https://ooblick.com/text/sh/)
LaTeX2e document
## pattern
```sh
#!/bin/sh
```
## Variables
```sh
#!/bin/sh
VAR=value

echo $VAR
echo ${VAR}isSh
```

## environment variables
```sh
#!/bin/sh
VAR=value # set up a local variable

export VAR # Turn local variable into an environment variable

unset VAR # unexport a variable
```

## Command-line arguments
`$#` contains the number of command-line arguments that were given.

`$0` contains the name of the script (argv[0] in C programs).

`$1`-`$9` refers to the command-line argument.

If you have more than nine command-line arguments, you can use the `shift` command: this discards the first command-line argument, and bumps the remaining ones up by one position.

`$*` list all of the command-line arguments. written "$1 $2 $3"

`$@` list all of the command-line arguments. written "$1" "$2" "$3"

## special variables
`$?` gives the exit status of the last command that was executed. This should be zero if the command exited normally.

`$-` lists all of the options with which sh was invoked. See sh(1) for details.

`$$` holds the PID of the current process.

`$!` holds the PID of the last command that was executed in the background.

`$IFS` (Input Field Separator) determines how sh splits strings into words.

## Quasi-variable constructs
The `${VAR}` construct is actually a special case of a more general class of constructs:

`${VAR:-expression}`Use default value: if VAR is set and non-null, expands to $VAR. Otherwise, expands to expression.

`${VAR:=expression}`Set default value: if VAR is set and non-null, expands to $VAR. Otherwise, sets VAR to expression and expands to expression.

`${VAR:?[expression]}`If VAR is set and non-null, expands to $VAR. Otherwise, prints expression to standard error and exits with a non-zero exit status.

`${VAR:+expression}`If VAR is set and non-null, expands to the empty string. Otherwise, expands to expression.

`${#VAR}`Expands to the length of $VAR.

The above patterns test whether VAR is set and non-null. Without the colon, they only test whether VAR is set.

## Patterns and Globbing
sh supports a limited form of pattern-matching. The operators are

`*` Matches zero or more characters.
`?` Matches exactly one character.

[range]
Matches any character in range. range can be either a list of characters that match, or two endpoints separated by a dash: [ak3] matches either a, k, or 3; [a-z] matches any character in the range a through z; [a-mz] matches either a character in the range a through m, or z. If you wish to include a dash as part of the range, it must be the first character, e.g., [-p] will match either a dash or p.

When an expression containing these characters occurs in the middle of a command, sh substitutes the list of all files whose name matches the pattern. This is known as ``globbing.'' Otherwise, these are used mainly in the case construct.

As a special case, when a glob begins with * or ?, it does not match files that begin with a dot. To match these, you need to specify the dot explicitly (e.g., .*, /tmp/.*).

Note to MS-DOS users: under MS-DOS, the pattern *.* matches every file. In sh, it matches every file that contains a dot.

## Backquotes
the expression is evaluated as a command witch within backquotes
```sh
echo `whoami`
# or
name=`whoami`
```

## Built in commands
-	`(command;...)` 👉 execute commands in a subshell.
-	`:` 👉 just a colon do nothing.
-	`.flename` 👉 read a file and excute.
- jobs;bg;fg
	-	`jobs` 👉 lists jobs.
	-	`bg` 👉 runs the specified job in the background.
	-	`fg` 👉  resumes the specified job in the foreground.
	-	Jobs are specified as %number.
-	`cd`
	-	sets the current directory to *dir*.
	-	if dir is not specified, sets the current directory to the home directory.
-	`pwd` 👉 prints the current directory.
-	`echo` 👉 prints args to standard output.
-	`eval` 👉 evaluates args as a sh expression.
-	`exec`
	-	runs the specified command, and replaces the current shell with it.
	-	nothing after the exec statement will be executed, unless the exec itself fails.
-	`exit` 👉 Exit the current shell with exit code *n*.
-	`kill` [-sig] %job
	-	send signal to specified job.
	-	`kill -l` 👉 list all available signals.
-	`read` name
	-	reads one line from standard input and assigns it to the variable name.
	-	if several variables are specified, each input line will assigns to opposite variable.
-	set [+/-flag] [arg]
	-	`set` 👉 prints the values of all variables.
	-	`set` args... 👉 sets the command-line arguments to args.
	-	`set` +/- flag
-	`test` 👉 evaluates a boolean expression and exits with an exit code of zero if it is true, or non-zero if it is false.
-	`trap` [command sig] 👉 If signal sig is sent to the shell, execute command.
-	ulimit
-	umask
-	wait
